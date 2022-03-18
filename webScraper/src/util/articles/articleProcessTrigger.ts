import articleStorer from "./articleFetch&Save/articleStorer";
import articleUrlGrab from "./articleFetch&Save/articleUrlGrab";
import fetchArticles from "./articleFetch&Save/fetchArticles";
import articleParser from "./articleFormatting/articleParser";


export default async function articleProcessTrigger(options): Promise<void> {
    const articleObjectArray = articleUrlGrab(await fetchArticles(options));
    const completeArticlesArray = await articleParser(articleObjectArray);
    articleStorer(completeArticlesArray)
}