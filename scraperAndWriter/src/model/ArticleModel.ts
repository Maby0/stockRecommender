export default interface ArticleModel {
    id: number;
    datePublished: string;
    url: string;
    articleText: string;
    polarity?: number;
    subjectivity?: number;
}