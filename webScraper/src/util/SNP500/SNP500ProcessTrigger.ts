import fetchSNP500 from "./SNP500Fetch&Save/fetchSNP500";

export default async function SNP500ProcessTrigger() {
    await fetchSNP500();
}