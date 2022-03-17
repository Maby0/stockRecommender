import articleStorer from "./articleFetch&Save/articleStorer";
import articleUrlGrab from "./articleFetch&Save/articleUrlGrab";
import fetchArticles from "./articleFetch&Save/fetchArticles";
import articleParser from "./articleFormatting/articleParser";


export default async function articleProcessTrigger(options): Promise<void> {
    const urlArr = articleUrlGrab(await fetchArticles(options));
    const articles = await articleParser(urlArr);
    articleStorer(articles)
}