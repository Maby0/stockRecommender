require('dotenv').config();

import { AxiosRequestConfig } from 'axios';
import articleProcessTrigger from './util/articles/articleProcessTrigger';
import SNP500ProcessTrigger from './util/SNP500/SNP500ProcessTrigger';
import scanArticlesForSNP500 from './util/findCompanyInfoInArticle';

const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://cnbc.p.rapidapi.com/news/v2/list-trending',
    params: { tag: 'Articles', count: '30' },
    headers: {
    'x-rapidapi-host': 'cnbc.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY
    }
};

async function setupProcess(config: AxiosRequestConfig): Promise<void> {
    await articleProcessTrigger(config);
    await SNP500ProcessTrigger();
}

function mainProcess() {
    scanArticlesForSNP500();
    // console.log(scanArticlesForSNP500());
}

// setupProcess(config);
mainProcess();
