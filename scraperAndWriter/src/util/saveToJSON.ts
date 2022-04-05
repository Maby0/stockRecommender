import fs from 'fs';
import ArticleModel from '../model/articleModel';
import CompanyScore from '../model/CompanyScoreModel';
import Referencer from '../model/ReferencerModel';

export default function saveToJson(objectArray: ArticleModel[] | Referencer[] | CompanyScore[], fileName: string) {
    try {
        fs.writeFileSync(`../data/${fileName}.json`, JSON.stringify(objectArray))
        console.log(`${fileName}.json successfully written.`);
    } catch (error) {
        console.error(error)
    }
}