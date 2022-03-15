import axios, { AxiosRequestConfig } from 'axios';
import AssetModel from '../model/assetModel';

export default async function fetchArticles(options: AxiosRequestConfig): Promise<AssetModel[]> {
    return axios.request(options).then(function (response) {
        // console.log(response.data.data.mostPopularEntries.assets);
        return response.data.data.mostPopularEntries.assets;
    }).catch(function (error) {
        console.error(error);
    });
}
