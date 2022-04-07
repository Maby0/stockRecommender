require('dotenv').config();

import express from 'express';
import { AxiosRequestConfig } from 'axios';
import articleProcessTrigger from './util/articles/articleProcessTrigger';
import SP500ProcessTrigger from './util/S&P500/S&P500ProcessTrigger';
import articleScanTrigger from './util/articleScanner/articleScanTrigger';
import { scoreArticleSentiment, scoreSentenceSentiment } from './util/pythonCodeTrigger'
import calculateCompanyScores from './util/scoreGenerator';
import placeOrders from './util/traderTrigger';

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
    console.log("--------------------------\nBeginning setup process\n--------------------------");
    await articleProcessTrigger(config);
    await scoreArticleSentiment();
    console.log("Setup process complete.\n\n");
}

async function midProcess() {
    console.log("--------------------------\nBeginning mid process\n--------------------------");
    articleScanTrigger();
    await scoreSentenceSentiment();
    console.log("Mid process complete.\n\n");
}

async function finalProcess() {
    console.log("--------------------------\nBeginning final process\n--------------------------");
    calculateCompanyScores();
    await placeOrders();
    console.log("\nAll necessary orders placed.");
    console.log("\nFinal process complete.\n\n");
}

app.listen(port, async () => {
    console.log(`App listening on port ${port}!\n`)
    // await SP500Update();
    await setupProcess(config);
    await midProcess();
    await finalProcess()
})
