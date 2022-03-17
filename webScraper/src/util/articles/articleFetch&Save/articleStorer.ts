import fs from 'fs';
import {quoteFormatter, htmlTagStrip} from '../articleFormatting/articleTextFormatter';

export default function articleStorer(articlesArray) {
    if (!fs.existsSync('../data/articleText.csv')) fs.appendFileSync('../data/articleText.csv', "Article\n", 'utf-8');

    articlesArray.forEach(article => {
        if (article) {
            const formattedArticleText = quoteFormatter(htmlTagStrip(article.content)).substring(1);
            let csvInsert = '"' + formattedArticleText + '"' + "\n";
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