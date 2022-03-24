import fs from 'fs';
import ArticleModel from '../model/articleModel';
import Referencer from '../model/ReferencerModel';

export default function saveToJson(objectArray: ArticleModel[] | Referencer[], fileName: string) {
    fs.writeFile(`../data/${fileName}.json`, JSON.stringify(objectArray), function (err) {
        if (err) {
            console.log(`Error occurred - could not save to file ${fileName}.`);
        } else {
            console.log(`${fileName}.json successfully written.`);
        }
    })
}