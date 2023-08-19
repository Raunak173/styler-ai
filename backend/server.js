/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Configuration, OpenAIApi} = require('openai');
require('dotenv').config();
const api_key = process.env.OPEN_API_KEY;
const config = new Configuration({apiKey: `${api_key}`});

const openai = new OpenAIApi(config);
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Styler.AI Backend is running!');
});

app.post('/api/generate', async (req, res) => {
    const {prompt, maxTokens} = req.body;
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: maxTokens,
        temperature: 0,
    });
    console.log(response.data.choices[0].text);
    res.send(response.data.choices[0].text);
    }
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));