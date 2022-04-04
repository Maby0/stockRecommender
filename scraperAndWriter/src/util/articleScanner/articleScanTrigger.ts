import extractArticleSentences from "./extractArticleSentences";
import scanArticlesForSNP500 from "./findCompanyInfoInArticle";

export default function articleScanTrigger() {
    const referencerArray = scanArticlesForSNP500();
    extractArticleSentences(referencerArray)
    console.log("Article scanning complete.");
}