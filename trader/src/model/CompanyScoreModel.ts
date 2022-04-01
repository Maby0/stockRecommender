import CompanyDataObj from "./CompanyDataModel";

export default interface CompanyScore {
    company: CompanyDataObj;
    articles: {
        nArticlesReferencedIn: number;
        averagePolarityScore: number;
    }
    sentences: { 
        nSentencesReferencedIn: number;
        averagePolarityScore: number;
    }
    overallPolarityScore: number;
}