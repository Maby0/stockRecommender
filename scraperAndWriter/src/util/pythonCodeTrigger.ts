import { execFile } from 'child_process'
import util from 'util';

const execF = util.promisify(execFile);

async function _sentimentAnalyserCodeTrigger(textBody: string) {
    const { stdout } = await execF('python3', [`../sentiment_analyser/${textBody}_sentiment.py`])
    console.log(stdout);
}

async function scoreArticleSentiment() {
    await _sentimentAnalyserCodeTrigger('article');
}

async function scoreSentenceSentiment() {
    await _sentimentAnalyserCodeTrigger('sentence');
}

export { scoreArticleSentiment, scoreSentenceSentiment }