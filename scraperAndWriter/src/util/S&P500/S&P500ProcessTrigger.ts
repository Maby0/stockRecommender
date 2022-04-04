import fetchSP500 from "./S&P500Fetch&Save/fetchS&P500";

export default async function SP500ProcessTrigger() {
    await fetchSP500();
}