import extractArticleSentences from "./extractArticleSentences";
import scanArticlesForSP500 from "./findCompanyInfoInArticle";

export default function articleScanTrigger() {
    const referencerArray = scanArticlesForSP500();
    extractArticleSentences(referencerArray)
    console.log("Article scanning complete.");
}