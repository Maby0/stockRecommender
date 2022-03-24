import ArticleModel from '../../../model/articleModel';
import saveToJson from '../../saveToJSON';
import { quoteFormatter, htmlTagStrip } from '../articleFormatting/articleTextFormatter';

export default function articleStorer(articlesArray: ArticleModel[]) {
    const finalArticleArray = [];
    articlesArray.forEach(article => {
        if (article.articleText) {
            article.articleText = _formatArticleText(article.articleText);
            finalArticleArray.push(article)
        }
    })
    // _writeToJSON(finalArticleArray);
    saveToJson(finalArticleArray, "articles");
}


// function _writeToJSON(data: ArticleModel[]): void {
//     fs.appendFile('../data/articles.json', JSON.stringify(data), 'utf-8', function(err) {
//         if (err) {
//             console.log("Error occurred");
//         } else {
//             console.log("Articles saved!");
//         }
//     })
// }

function _formatArticleText(text: string): string {
    return quoteFormatter(htmlTagStrip(text)).substring(1);
}