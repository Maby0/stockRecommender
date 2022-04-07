import CompanyScore from "../model/CompanyScoreModel";
import readJson from "./readJson";
import { createOrder } from "./tradingPlatformAPIHandler";

const companyScores: CompanyScore[] = readJson();
const base = 100;
const minimumPolarity = 0.1;

async function placeBuyOrders() {
    companyScores.forEach(async companyScoreObj => {
        if (companyScoreObj.overallPolarityScore > minimumPolarity) {
            const value = companyScoreObj.overallPolarityScore * base;
            await createOrder(companyScoreObj.company.symbol, value)
            console.log(`Buy order placed for ${companyScoreObj.company.name} valued at $${value.toFixed(2)}.`);
        }
    });
}

placeBuyOrders()
