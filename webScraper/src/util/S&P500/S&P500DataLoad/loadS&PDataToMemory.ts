import fs from 'fs';
import CompanyDataObj from '../../../model/CompanyDataModel';

export default function loadSP500Data(): CompanyDataObj[] {
    const companyData = fs
        .readFileSync('../data/S&P500.csv')
        .toString()
        .split('\n')
        .map(company => {
            return company.replace('\r', '').split(',')
        })
    
    return companyData.slice(1).map(company => {
        return {
            symbol: company[0],
            name: company[1],
            sector: company[2]
        }
    })
}