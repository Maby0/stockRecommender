export default interface CompanyScore {
    company: {
        symbol: string;
        name: string;
        sector: string;
    },
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