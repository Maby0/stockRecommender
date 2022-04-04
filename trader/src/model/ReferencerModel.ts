import ArticleModel from "./ArticleModel";
import CompanyDataObj from "./CompanyDataModel";
import SentenceModel from "./SentenceModel";

export default interface Referencer {
    company: CompanyDataObj;
    articlesCompanyReferencedIn: ArticleModel[];
    extractedSentences: SentenceModel[];
}