import CompanyDataObj from '../model/CompanyDataModel';
import Referencer from '../model/ReferencerModel';
import { allStoredArticles, SNP500CompaniesArray } from '../constants/constants';

export default function scanArticlesForSNP500() {
    const referencerArray = []
    SNP500CompaniesArray.forEach(company => {
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