import fetchSNP500 from "./SNP500Fetch&Save/fetchSNP500";
import fs from 'fs';

export default async function SNP500ProcessTrigger() {
    // if (!fs.existsSync('../data/SNP500.csv')) await fetchSNP500();
    await fetchSNP500();
}