require('dotenv').config();

import express from 'express';
import { AxiosRequestConfig } from 'axios';
import articleProcessTrigger from './util/articles/articleProcessTrigger';
import SNP500ProcessTrigger from './util/SNP500/SNP500ProcessTrigger';
import articleScanTrigger from './util/articleScanner/articleScanTrigger';
import { scoreArticleSentiment, scoreSentenceSentiment } from './util/pythonCodeTrigger'

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

async function setupProcess(config: AxiosRequestConfig): Promise<void> {
    await articleProcessTrigger(config);
    await SNP500ProcessTrigger();
    scoreArticleSentiment();
}

async function mainProcess() {
    console.log("this happens after article polarity");
    articleScanTrigger();
    scoreSentenceSentiment();
}

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!`)
    await setupProcess(config);
    mainProcess();
})
