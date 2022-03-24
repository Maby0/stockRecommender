import scanArticlesForSNP500 from "./findCompanyInfoInArticle";

export default function articleScanTrigger() {
    const referencerArray = scanArticlesForSNP500();
    
    // extract sentences where company is mentioned()
}