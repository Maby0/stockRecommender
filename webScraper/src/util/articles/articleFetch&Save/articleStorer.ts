import fs from 'fs';
import ArticleModel from '../../../model/articleModel';
import {quoteFormatter, htmlTagStrip} from '../articleFormatting/articleTextFormatter';

export default function articleStorer(articlesArray: ArticleModel[]) {
    if (!fs.existsSync('../data/articleText.csv')) fs.appendFileSync('../data/articleText.csv', "id, datePublished, url, article\n", 'utf-8');
    articlesArray.forEach(article => {
        if (article.articleText) {
            const formattedArticleText = quoteFormatter(htmlTagStrip(article.articleText)).substring(1);
            let csvInsert = `${article.id.toString()}, ${article.datePublished}, ${article.url}, ` + '"' + formattedArticleText + '"' + "\n";
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