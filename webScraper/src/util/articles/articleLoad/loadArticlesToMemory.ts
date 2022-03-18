import fs from 'fs';

export default function loadArticles() {
    return fs.readFileSync('../data/articleText.csv').toString().split('\n')
}