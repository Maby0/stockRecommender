require('dotenv').config();

import { AxiosRequestConfig } from 'axios';
import articleUrlGrab from './util/articleUrlGrab';
import fetchArticles from './util/fetchArticles';
import { articleParser, htmlTagStrip } from './util/articleParser'
import fs from 'fs';
import doubleQuoteDoubler from './util/csvFormatter';

const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://cnbc.p.rapidapi.com/news/v2/list-trending',
    params: { tag: 'Articles', count: '30' },
    headers: {
    'x-rapidapi-host': 'cnbc.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY
    }
};

async function saveArticleText() {
    const urlArr = articleUrlGrab(await fetchArticles(options));
    const articles = await articleParser(urlArr);

    if (!fs.existsSync('../data/articleText.csv')) fs.appendFileSync('../data/articleText.csv', "Article\n", 'utf-8')

    articles.forEach(article => {
        if (article) {
            const formattedArticleText = doubleQuoteDoubler(htmlTagStrip(article.content)).substring(1)
            let csvInsert = '"' + formattedArticleText + '"' + "\n"
            fs.appendFile('../data/articleText.csv', csvInsert, 'utf-8', function(err) {
                if (err) {
                    console.log("Error occurred");
                } else {
                    console.log("Articles saved!");
                }
            })
        }
    })
}

saveArticleText();
