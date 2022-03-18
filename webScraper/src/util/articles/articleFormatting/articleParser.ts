import { extract } from 'article-parser';
import ArticleModel from '../../../model/articleModel';

// need to update article.article property and return list of ArticleMODELobjects.
export default async function articleParser(articleObjectArray:ArticleModel[]) {
    // return await Promise.all(articleObjectArray.forEach(async (article) => {
    //     article.articleText = await extract(article.url)
    // }))
    for (let i = 0; i < articleObjectArray.length; i++) {
        const articleData = await extract(articleObjectArray[i].url)
        articleObjectArray[i].articleText = articleData ? articleData.content : ""
    }
    return articleObjectArray;
}