import CompanyDataObj from "./CompanyDataModel";

export default interface Referencer {
    company: CompanyDataObj;
    articlesCompanyReferencedIn: string[];
}