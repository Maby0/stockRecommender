import fs from 'fs';
import ArticleModel from '../model/articleModel';
import CompanyDataObj from '../model/CompanyDataModel';
import Referencer from '../model/ReferencerModel';
import loadArticles from './articles/articleLoad/loadArticlesToMemory';
import loadSNPData from './SNP500/SNP500DataLoad/loadSNPDataToMemory';

export default function scanArticlesForSNP500(): Referencer[] {
    const allStoredArticles = loadArticles();
    const SNP500CompaniesArray = loadSNPData();
    const referencerArray = [];

    SNP500CompaniesArray.forEach(company => {
        const referencedArticles = []
        allStoredArticles.forEach(article => {
            if (article.articleText.includes(company.name)) referencedArticles.push(article)
        })
        if (referencedArticles.length) referencerArray.push(_referencerGenerator(company, referencedArticles))
    })
    _saveToJson(referencerArray)
    return referencerArray;
}

function _referencerGenerator(companyData: CompanyDataObj, articleArray: ArticleModel[]): Referencer {
    return { company: companyData, articlesCompanyReferencedIn: articleArray }
}

function _saveToJson(referencerArray: Referencer[]) {
    fs.writeFileSync('../data/referencerArray.json', JSON.stringify(referencerArray))
}