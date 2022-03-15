import fs from 'fs';
import CompanyDataObj from '../model/CompanyDataObj';


const companyData = fs
    .readFileSync('../data/SNP500.csv')
    .toString()
    .split('\n')
    .map(company => {
        return company.replace('\r', '').split(',')
    })

export const companyDataObjArray: CompanyDataObj[] = companyData.slice(1).map(company => {
    return {
        symbol: company[0],
        name: company[1],
        sector: company[2]
    }
})