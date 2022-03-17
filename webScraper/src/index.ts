require('dotenv').config();

import { AxiosRequestConfig } from 'axios';
import articleProcessTrigger from './util/articles/articleProcessTrigger';
import loadSNPData from './util/SNP500/SNP500Fetch&Save/loadSNPData';
import SNP500ProcessTrigger from './util/SNP500/SNP500ProcessTrigger';

const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://cnbc.p.rapidapi.com/news/v2/list-trending',
    params: { tag: 'Articles', count: '30' },
    headers: {
    'x-rapidapi-host': 'cnbc.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY
    }
};

async function mainProcess(options: AxiosRequestConfig): Promise<void> {
    await articleProcessTrigger(options);
    await SNP500ProcessTrigger();
    // console.log(await loadSNPData());
    // console.log(scanArticlesForSNP500());
}

mainProcess(options);
