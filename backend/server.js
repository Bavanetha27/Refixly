import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import fs from "fs";
import multer from "multer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // <-- Ensure JSON parsing for incoming requests

//Multer setup for storing images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

// Health check
app.get('/', (req, res) => {
    res.send('AI Damage Detection API running ✅');
});

// POST route for damage detection
app.post('/api/ai-damage-detection', upload.array('images'), async (req, res) => {
    const { type, model, description } = req.body;
    const images = req.files;

    if (!type || !description || images.length === 0) {
        return res.status(400).json({ success: false, message: "All fields and at least one image are required." });
    }

    try {
        const prompt = `
You are an expert in electronic device repair. Analyze the following device damage report and provide a clear damage assessment and repair suggestion.

Device Type: ${type}
Model: ${model || 'Not Provided'}
Issue Description: ${description}
Uploaded Images: ${images.map(file => file.originalname).join(", ")}

Respond in a clear and professional tone. If the issue appears severe, mention approximate damage areas (e.g., screen, motherboard, etc.) and estimated repair actions.`;

        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'sonar',
                messages: [
                    { role: 'system', content: 'Be precise and to the point.' },
                    { role: 'user', content: prompt },
                ],
            }),
        };

        const response = await fetch('https://api.perplexity.ai/chat/completions', options);
        const data = await response.json();

        const reply = data?.choices?.[0]?.message?.content || 'No response from AI.';
        // console.log(reply);

        res.status(200).json({ success: true, message: "here is our view", reply: reply });
    } catch (error) {
        console.error('AI damage detection error:', error);
        res.status(500).json({ success: false, message: 'Failed to analyze device damage.', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});