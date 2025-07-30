const express = require("express");
const multer = require("multer")
const { AIDamageDetector } = require("../Controllers/aidamdet.Conrtroller")

//Multer setup if you want storing images
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadDir = './uploads';
//         if (!fs.existsSync(uploadDir)) {
//             fs.mkdirSync(uploadDir);
//         }
//         cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//         const uniqueName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
//         cb(null, uniqueName);
//     }
// });

// Use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/api/ai-damage-detection', upload.array('images'), AIDamageDetector);

module.exports = router;