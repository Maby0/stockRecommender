require('dotenv').config();

import express from 'express';
import { AxiosRequestConfig } from 'axios';
import articleProcessTrigger from './util/articles/articleProcessTrigger';
import sentimentScoreGenerator from './util/pythonCodeTrigger';
import SNP500ProcessTrigger from './util/SNP500/SNP500ProcessTrigger';

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
}

function mainProcess() {
    // scanArticlesForSNP500();
    sentimentScoreGenerator();
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    // setupProcess(config);
    mainProcess();
})
