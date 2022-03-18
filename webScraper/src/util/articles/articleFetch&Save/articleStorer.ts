import fs from 'fs';
import ArticleModel from '../../../model/articleModel';
import {quoteFormatter, htmlTagStrip} from '../articleFormatting/articleTextFormatter';

export default function articleStorer(articlesArray: ArticleModel[]) {
    _generateCSVHeaders();
    articlesArray.forEach(article => {
        if (article.articleText) {
            const formattedArticleText = _formatArticleText(article.articleText);
            const csvInsert = `${article.id.toString()}, ${article.datePublished}, ${article.url}, ` + formattedArticleText + "\n";
            _insertCSVLine(csvInsert);
        }
    })
}


function _generateCSVHeaders(): void {
    if (!fs.existsSync('../data/articleText.csv')) fs.appendFileSync('../data/articleText.csv', "id, datePublished, url, article\n", 'utf-8');
}

function _insertCSVLine(data: string): void {
    fs.appendFile('../data/articleText.csv', data, 'utf-8', function(err) {
        if (err) {
            console.log("Error occurred");
        } else {
            console.log("Article saved!");
        }
    })
}

function _formatArticleText(text: string): string {
    return quoteFormatter(htmlTagStrip(text)).substring(1);
}