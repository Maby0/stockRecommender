import fs from 'fs';

export default function readJson() {
    try {
        const json = fs.readFileSync('../data/calculatedScores.json').toString()
        return JSON.parse(json);
    } catch (error) {
        console.log(error);
    }
}