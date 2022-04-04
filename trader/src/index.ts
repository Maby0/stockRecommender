import CompanyScore from "../model/CompanyScoreModel";
import readJson from "./readJson";
import { createOrder } from "./tradingPlatformAPIHandler";

const companyScores: CompanyScore[] = readJson();
const base = 100;
const minimumPolarity = 0.1;

function placeBuyOrders() {
    companyScores.forEach(companyScoreObj => {
        if (companyScoreObj.overallPolarityScore > minimumPolarity) {
            const value = companyScoreObj.overallPolarityScore * base;
            createOrder(companyScoreObj.company.symbol, value)
        }
    });
}

// placeBuyOrders()
