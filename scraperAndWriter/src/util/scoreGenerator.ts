import fs from 'fs';
import Referencer from '../model/ReferencerModel';
import SentenceModel from '../model/SentenceModel';
import CompanyScore from '../model/CompanyScoreModel';
import saveToJson from './saveToJSON';

export default function calculateCompanyScores() {
    const referencers: Referencer[] = _readJSON();
    const companyScores: CompanyScore[] = [];
    referencers.forEach(referencer => {
        const companyScore: CompanyScore = {
            company: referencer.company,
            articles: [],
            overallPolarityScore: 0
        }
        referencer.articlesCompanyReferencedIn.forEach(articleObj => {
            let sentencePolarity: number[] | number = _extractPolarityOfMatchingIds(referencer.extractedSentences, articleObj.id)
            sentencePolarity = _calculateAverage(sentencePolarity)
            companyScore.articles.push({
                id: articleObj.id,
                articlePolarity: articleObj.polarity,
                sentencePolarity: sentencePolarity,
                articleAndSentencePolarity: (articleObj.polarity + sentencePolarity) / 2
            });
        });
        companyScore.overallPolarityScore = companyScore.articles
            .reduce((n, article) => n + article.articleAndSentencePolarity, 0) 
            / companyScore.articles.length
        companyScores.push(companyScore)
    });
    saveToJson(companyScores, "calculatedScores");
}

function _calculateAverage(numArray: number[]) {
    return numArray.reduce((a, b) => a + b) / numArray.length
}

function _extractPolarityOfMatchingIds(sentenceArray: SentenceModel[], id: number) {
    return sentenceArray
        .filter(sentence => sentence.articlIdOfReferencedSentence === id)
        .map(sentence => sentence.polarity)
}

function _readJSON() {
    try {
        const json = fs.readFileSync('../data/referencers.json').toString()
        return JSON.parse(json);
    } catch (error) {
        console.log(error);
    }
}
