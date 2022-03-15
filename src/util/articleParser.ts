import { extract } from 'article-parser';

async function articleParser(urlList:string[]) {
    return await Promise.all(urlList.map(async (url) => {
        return await extract(url)
    }))
    
}

function htmlTagStrip(text: string): string {
    // remove html tags
    const asd = text.replace(/<[^>]+>/g, ' ');
    // replace multiple spaces with single space
    return asd.replace(/  +/g, ' ');
}

export { articleParser, htmlTagStrip }