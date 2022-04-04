import CompanyDataObj from "./CompanyDataModel";
import PostAnalysisArticleModel from "./PostAnalysisArticleModel";

export default interface CompanyScore {
    company: CompanyDataObj;
    articles: PostAnalysisArticleModel[]
    overallPolarityScore: number;
}