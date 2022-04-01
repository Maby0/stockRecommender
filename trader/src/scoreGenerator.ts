import fs from 'fs';
import ArticleModel from './model/articleModel';
import CompanyScore from './model/CompanyScoreModel';
import Referencer from './model/ReferencerModel';
import SentenceModel from './model/SentenceModel';


export default function calculateCompanyScores() {
    const referencers: Referencer[] = _readJSON();
    const companyScores: CompanyScore[] = []
    
    referencers.forEach(referencer => {
        const articlesAvgPolarity = _calculateAverage(referencer.articlesCompanyReferencedIn)
        const sentenceAvgPolarity = _calculateAverage(referencer.extractedSentences)

        companyScores.push({
            company: referencer.company,
            articles: {
                nArticlesReferencedIn: referencer.articlesCompanyReferencedIn.length,
                averagePolarityScore: articlesAvgPolarity
            },
            sentences: {
                nSentencesReferencedIn: referencer.extractedSentences.length,
                averagePolarityScore: sentenceAvgPolarity
            },
            overallPolarityScore: (articlesAvgPolarity + sentenceAvgPolarity) / 2
        })
    });
    return companyScores;
}

function _readJSON() {
    try {
        const json = fs.readFileSync('../data/referencers.json').toString()
        return JSON.parse(json);
    } catch (error) {
        console.log(error);
    }
}

function _calculateAverage(modelArray: ArticleModel[] | SentenceModel[]) {
    let sum = 0;
    for (let i = 0; i < modelArray.length; i++) {
        sum += modelArray[i].polarity;
    }
    return sum / modelArray.length;
}
