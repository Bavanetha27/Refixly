import { useEffect, useState } from "react";
import axios from "axios";
import AIResponseSection from "./AIResponseSection";

const AIDamageDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    type: '',
    model: '',
    description: '',
  });
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleChange = (e) => {
    setDeviceInfo({ ...deviceInfo, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAiResponse('');

    const formData = new FormData();
    formData.append('type', deviceInfo.type);
    formData.append('model', deviceInfo.model);
    formData.append('description', deviceInfo.description);
    images.forEach((image) => formData.append('images', image));

    try {
      const res = await axios.post('http://localhost:5000/api/ai-damage-detection', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setAiResponse(res.data.reply); // assuming response includes a `result` field
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Upload failed: ' + (error?.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-4 pt-10 pb-20 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">🔍 Device Damage Detector</h1>
        <p className="text-sm text-gray-600 mt-1">AI-powered diagnostics with repair suggestions</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-full mx-auto">
        <label className="text-sm font-medium text-gray-700">
          Device Type <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="type"
          value={deviceInfo.type}
          onChange={handleChange}
          placeholder="e.g., Smartphone, Laptop"
          required
          className="w-full px-4 py-2 border rounded-lg text-sm"
        />

        <label className="text-sm font-medium text-gray-700">Model</label>
        <input
          type="text"
          name="model"
          value={deviceInfo.model}
          onChange={handleChange}
          placeholder="e.g., iPhone 13, Dell XPS"
          className="w-full px-4 py-2 border rounded-lg text-sm"
        />

        <label className="text-sm font-medium text-gray-700">
          Describe the Issue <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={deviceInfo.description}
          onChange={handleChange}
          placeholder="Describe what happened..."
          rows={4}
          required
          className="w-full px-4 py-2 border rounded-lg text-sm"
        />

        <label className="text-sm font-medium text-gray-700">Upload Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full text-sm"
        />

        {!isSubmitting ? (
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Analyze Damage
          </button>
        ) : (
          <div className="w-full text-center text-sm text-gray-600 mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-500 h-2.5 rounded-full"
                style={{ width: `60%`, transition: 'width 1s' }}
              ></div>
            </div>
            <p className="mt-1">Analyzing damage... 60%</p>
          </div>
        )}
      </form>

      {aiResponse && (
        <div className="max-w-3xl mx-auto mt-10 bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 overflow-y-auto">
          {/* <h2 className="text-xl font-bold text-purple-700 mb-4">🧠 AI Analysis Report</h2> */}
          <div className="prose prose-sm prose-purple max-w-none">
            <AIResponseSection aiResponse={aiResponse} />
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full text-xs font-medium shadow-md">
          📡 Refixly
        </button>
      </div>
    </div>
  );
};

export default AIDamageDetection;
