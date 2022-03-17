import fs from 'fs';
import CompanyDataObj from '../model/CompanyDataModel';
import Referencer from '../model/ReferencerModel';
import { companyDataObjArray } from "./loadSNPData";

export default function scanArticlesForSNP500() {
    const referencerArray = []
    const allStoredArticles = fs.readFileSync('../data/articleText.csv').toString().split('\n')
        // .forEach(article => {
        //     const companiesArray = []
        //     companyDataObjArray.forEach(company => {
        //         if (article.includes(company.name)) companiesArray.push(company)
        //     })
        //     if (companiesArray.length) referencerArray.push(_referencerGenerator(companiesArray, article))
        // })
    companyDataObjArray.forEach(company => {
        const referencedArticles = []
        allStoredArticles.forEach(article => {
            if (article.includes(company.name)) referencedArticles.push(article)
        })
        if (referencedArticles.length) referencerArray.push(_referencerGenerator(company, referencedArticles))
    })
    return referencerArray;
}

function _referencerGenerator(companyData: CompanyDataObj, articleArray: string[]): Referencer {
    return { company: companyData, articlesCompanyReferencedIn: articleArray }
}