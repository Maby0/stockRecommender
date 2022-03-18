import ArticleModel from "../../../model/articleModel";
import AssetModel from "../../../model/assetModel";

export default function articleUrlGrab(articleArray: AssetModel[]): ArticleModel[] {
    return articleArray.map(article => {
        return {
            id: article.id,
            datePublished: article.dateLastPublished,
            url: article.url,
            articleText: ""
        }
    })
}