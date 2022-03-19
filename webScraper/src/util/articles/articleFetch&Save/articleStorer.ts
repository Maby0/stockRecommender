import fs from 'fs';
import ArticleModel from '../../../model/articleModel';
import {quoteFormatter, htmlTagStrip} from '../articleFormatting/articleTextFormatter';

export default function articleStorer(articlesArray: ArticleModel[]) {
    articlesArray.forEach(article => {
        if (article.articleText) {
            article.articleText = _formatArticleText(article.articleText);
        }
    })
    _createJSONEntry(articlesArray)
}


function _createJSONEntry(data: ArticleModel[]): void {
    fs.appendFile('../data/articles.json', JSON.stringify(data), 'utf-8', function(err) {
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