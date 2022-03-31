import ArticleModel from '../../model/articleModel';
import CompanyDataObj from '../../model/CompanyDataModel';
import Referencer from '../../model/ReferencerModel';
import loadArticles from '../articles/articleLoad/loadArticlesToMemory';
import loadSPData from '../S&P500/S&P500DataLoad/loadS&PDataToMemory';

export default function scanArticlesForSP500(): Referencer[] {
    const allStoredArticles = loadArticles();
    const SP500CompaniesArray = loadSPData();
    const referencerArray = [];

    SP500CompaniesArray.forEach(company => {
        const referencedArticles = []
        allStoredArticles.forEach(article => {
            if (article.articleText.includes(company.name)) referencedArticles.push(article)
        })
        if (referencedArticles.length) referencerArray.push(_referencerGenerator(company, referencedArticles))
    })
    return referencerArray;
}

function _referencerGenerator(companyData: CompanyDataObj, articleArray: ArticleModel[]): Referencer {
    return { company: companyData, articlesCompanyReferencedIn: articleArray }
}
