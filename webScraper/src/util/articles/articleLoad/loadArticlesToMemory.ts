import fs from 'fs';
import ArticleModel from '../../../model/articleModel';

export default function loadArticles(): ArticleModel[] {
    const rows = fs.readFileSync('../data/articleText.csv').toString().split('\n')
    return rows.map(articleData => {
        // let [id, datePublished, url, articleText] = articleData.split(", ", 4)
        // articleText.join(", ")
        const articleArray = articleData.split(", ")
        const properties = articleArray.slice(0,3)
        const text = articleArray.slice(4).join(", ")
        console.log(text);
        const cols = articleData.split(", ")
        return {
            id: parseInt(cols[0]),
            datePublished: cols[1],
            url: cols[2],
            articleText: cols[3]
        }
    })
}