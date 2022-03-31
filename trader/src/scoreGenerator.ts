import fs from 'fs';
import ArticleModel from './model/articleModel';
import CompanyScore from './model/CompanyScoreModel';
import Referencer from './model/ReferencerModel';
import SentenceModel from './model/SentenceModel';



export default function calculateCompanyScores() {
    const referencers: Referencer[] = _readJSON();
    if (!referencers.length) return "No referencers.json found"
    const companyScores: CompanyScore[] = []
    referencers.forEach(referencer => {
        // const articlesPolaritySum = 0
        const articlesAvgPolarity = _calculateAverage(referencer.articlesCompanyReferencedIn)
        const sentenceAvgPolarity = _calculateAverage(referencer.extractedSentences)
        // const articlesAvgPolarity = 1
        // const sentenceAvgPolarity = 1
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
        return;
    }
}

function _calculateAverage(modelArray: ArticleModel[] | SentenceModel[]) {
    // return (modelArray.reduce((a, b) => a + b.polarity, 0)) / modelArray.length;
    let sum = 0;
    for (let i = 0; i < modelArray.length; i++) {
        sum += modelArray[i].polarity;
    }
    return sum / modelArray.length;
}
