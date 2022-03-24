import Referencer from "../../model/ReferencerModel";
import SentenceModel from "../../model/SentenceModel";
import saveToJson from "../saveToJSON";

export default function extractArticleSentences(referencerArray: Referencer[]) {
    referencerArray.forEach(referencer => {
        const referencedSentenceArray: SentenceModel[] = [];
        referencer.articlesCompanyReferencedIn.forEach(articleObj => {
            // Splits article up into sentences
            articleObj.articleText.split(/(?<=[.?!]\s)(?=[A-Z])/).forEach(sentence => {
                if (sentence.includes(referencer.company.name) || sentence.includes(referencer.company.symbol)) {
                    referencedSentenceArray.push({
                        articlIdOfReferencedSentence: articleObj.id, 
                        sentenceText: sentence
                    });
                }
            })
        })
        referencer.extractedSentences = referencedSentenceArray;
    })
    saveToJson(referencerArray, "referencers");
}
