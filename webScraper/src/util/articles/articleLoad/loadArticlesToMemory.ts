import fs from 'fs';
import ArticleModel from '../../../model/articleModel';

export default function loadArticles(): ArticleModel[] {
    const rows = _readJSON()
    return rows;
}

function _readJSON() {
    const json = fs.readFileSync('../data/articles.json').toString()
    return JSON.parse(json);
}