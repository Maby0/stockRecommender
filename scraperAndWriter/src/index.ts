require('dotenv').config();

import express from 'express';
import { AxiosRequestConfig } from 'axios';
import articleProcessTrigger from './util/articles/articleProcessTrigger';
import SP500ProcessTrigger from './util/S&P500/S&P500ProcessTrigger';
import articleScanTrigger from './util/articleScanner/articleScanTrigger';
import { scoreArticleSentiment, scoreSentenceSentiment } from './util/pythonCodeTrigger'
import calculateCompanyScores from './util/scoreGenerator';

const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://cnbc.p.rapidapi.com/news/v2/list-trending',
    params: { tag: 'Articles', count: '30' },
    headers: {
    'x-rapidapi-host': 'cnbc.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY
    }
};

const app = express()
const port = 3000

async function SP500Update() {
    await SP500ProcessTrigger();
}

async function setupProcess(config: AxiosRequestConfig) {
    console.log("Beginning setup Process");
    await articleProcessTrigger(config);
    await scoreArticleSentiment();
    console.log("Setup process complete\n");
}

async function midProcess() {
    console.log("Beginning mid process");
    articleScanTrigger();
    scoreSentenceSentiment();
    console.log("Mid process complete\n");
}

async function finalProcess() {
    console.log("Beginning final process");
    calculateCompanyScores();
    console.log("Final process complete\n");
}

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!\n`)
    // await SP500Update();
    await setupProcess(config);
    // midProcess();
    // finalProcess()
})
