import { spawn } from 'child_process'

function _sentimentAnalyserCodeTrigger(textBody: string) {
    const process = spawn('python3', [`../sentiment_analyser/${textBody}_sentiment.py`]);
    process.stdout.on('data', function(data) {
        console.log(data.toString());
    })
}

function scoreArticleSentiment() {
    _sentimentAnalyserCodeTrigger('article');
}

function scoreSentenceSentiment() {
    _sentimentAnalyserCodeTrigger('sentence');
}

export { scoreArticleSentiment, scoreSentenceSentiment }