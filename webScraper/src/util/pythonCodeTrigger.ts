import { spawn } from 'child_process'

function pythonCodeTrigger() {
    const process = spawn('python3', ["../sentiment_analyser/article_sentiment.py"]);
    process.stdout.on('data', function(data) {
        console.log(data.toString());
    })
}

export default function sentimentScoreGenerator() {
    return pythonCodeTrigger();
}