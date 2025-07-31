import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import { Loader, UploadCloud, Camera } from 'lucide-react';
import NavBar from '../components/NavBar';

const ScanPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);
  const modelRef = useRef(null);

  const [isModelLoading, setIsModelLoading] = useState(true);
  const [scanMode, setScanMode] = useState('webcam');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [detectedObject, setDetectedObject] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      try {
        modelRef.current = await cocoSsd.load();
        setIsModelLoading(false);
        console.log('Model loaded successfully.');
      } catch (err) {
        console.error("Failed to load model:", err);
        setIsModelLoading(false);
      }
    };
    loadModel();
  }, []);

  useEffect(() => {
    if (!isModelLoading) {
      if (scanMode === 'webcam') {
        enableWebcam();
      } else {
        disableWebcam();
      }
    }
  }, [scanMode, isModelLoading]);

  useEffect(() => {
  if (!isModelLoading) {
    setScanMode('webcam');
    enableWebcam();
  }
}, [isModelLoading]);

  const enableWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const disableWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      setDetectedObject('');
    }
  };

  const performDetection = async (mediaElement) => {
    if (!mediaElement || !modelRef.current) {
      console.error("Media element or model not ready.");
      return;
    }
    setIsScanning(true);
    setDetectedObject('');

    const predictions = await modelRef.current.detect(mediaElement);
    const confidentPrediction = predictions.find(p => p.score > 0.5);

    if (confidentPrediction) {
      const detected = confidentPrediction.class;
      setDetectedObject(detected);

      // Save the successful scan to local storage for the profile page history
      const history = JSON.parse(localStorage.getItem('refixly_searchHistory')) || [];
      const newEntry = { id: Date.now(), term: detected, date: new Date().toISOString().split('T')[0] };
      const updatedHistory = [newEntry, ...history].slice(0, 10); 
      localStorage.setItem('refixly_searchHistory', JSON.stringify(updatedHistory));

    } else {
      setDetectedObject('No object detected with high confidence.');
    }
    setIsScanning(false);
  };

  const showTutorials = () => {
    if (detectedObject && !['', 'No object detected with high confidence.'].includes(detectedObject)) {
      navigate(`/tutorials/${detectedObject}`);
    }
  };

  const buttonBaseStyle = "px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2";
  const activeButtonStyle = "bg-blue-600 text-white";
  const inactiveButtonStyle = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <div className="h-screen bg-gray-900 text-white pt-20 flex flex-col">
      <NavBar />
      <div className="flex-1 overflow-y-auto flex flex-col items-center p-4 sm:p-6">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 drop-shadow-lg">AI Object Scanner</h1>
          <p className="text-gray-400 mt-2 mb-6">Scan an object using your webcam or by uploading an image.</p>
          
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => setScanMode('webcam')} className={`${buttonBaseStyle} ${scanMode === 'webcam' ? activeButtonStyle : inactiveButtonStyle}`}>
              <Camera size={20} /> Use Webcam
            </button>
            <button onClick={() => { setScanMode('image'); setTimeout(() => {fileInputRef.current?.click();}, 300);}} className={`${buttonBaseStyle} ${scanMode === 'image' ? activeButtonStyle : inactiveButtonStyle}`}>
              <UploadCloud size={20} /> Upload Image
            </button>
          </div>
          
          <div className="w-full max-w-xl mx-auto aspect-video bg-gray-800 border-2 border-gray-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
            {scanMode === 'webcam' ? (
              videoRef.current?.srcObject ? (<video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />) 
              : (<div className="text-center text-gray-400 p-6"> <Camera size={48} className="mx-auto mb-2" /> Please enable your camera to begin scanning. </div>)
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <input type="file" accept="image/*" onChange={handleImageUpload} ref={fileInputRef} className="hidden" />
                {uploadedImage ? (
                  <img ref={imageRef} src={uploadedImage} alt="Uploaded for scanning" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-center text-gray-400 p-6 hover:text-white transition-colors cursor-pointer" onClick={() => fileInputRef.current.click()} >
                  <UploadCloud size={48} className="mx-auto mb-2" /> Please upload an image to start scanning.
                  </div>
                )}
              </div>
            )}
          </div>
          
          <button
            onClick={() => performDetection(scanMode === 'webcam' ? videoRef.current : imageRef.current)}
            disabled={isModelLoading || isScanning || (scanMode === 'image' && !uploadedImage)}
            className="mt-6 px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            {isModelLoading ? <><Loader className="animate-spin" />Loading Model...</> : isScanning ? <><Loader className="animate-spin" />Scanning...</> : 'Scan Now'}
          </button>
          
          {detectedObject && (
            <div className="mt-8 p-6 bg-gray-800 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold">Detected Object: <span className="text-blue-400">{detectedObject}</span></h2>
              {detectedObject !== 'No object detected with high confidence.' && (
                <button onClick={showTutorials} className="mt-4 px-6 py-2 font-semibold text-black bg-blue-400 rounded-full hover:bg-blue-300 transition-colors">
                  Show Repair Tutorials
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanPage;