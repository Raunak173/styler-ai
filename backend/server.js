const express = require("express");
require("dotenv").config();
const openai = require("openai");
const app = express();
const port = 3001;
// openai.apiKey = process.env.OPEN_API_KEY;
openai.apiKey = "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";

app.use(express.json());

app.post("/chatgpt", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await openai.Completion.create({
      engine: "text-davinci-002",
      prompt: prompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    res.json({ text: response.choices[0].text });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
