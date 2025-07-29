const dotenv = require('dotenv');

dotenv.config();

exports.AIDamageDetector = async(req, res) => {
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
}