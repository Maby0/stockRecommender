import AssetModel from "../model/assetModel";

export default function articleUrlGrab(articleArray: AssetModel[]): string[] {
    return articleArray.map(article => {
        return article.url;
    })
}