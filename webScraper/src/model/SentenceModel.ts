export default interface SentenceModel {
    articlIdOfReferencedSentence: number;
    sentenceText: string;
    polarity?: number;
    subjectivity?: number;
}