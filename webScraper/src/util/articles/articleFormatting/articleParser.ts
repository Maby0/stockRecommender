import { extract } from 'article-parser';

export default async function articleParser(urlList:string[]) {
    return await Promise.all(urlList.map(async (url) => {
        return await extract(url)
    }))
    
}