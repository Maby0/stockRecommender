import fs from 'fs';
import { Dataset } from 'data.js';

export default async function fetchSP500(): Promise<void> {
    const path = 'https://datahub.io/core/s-and-p-500-companies/datapackage.json';
    const dataset = await Dataset.load(path);

    for (const id in dataset.resources) {
        if (dataset.resources[id]._descriptor.name === "constituents_csv") {
            const file = dataset.resources[id];
            const stream = await file.stream();
            const writeStream = fs.createWriteStream('../data/S&P500.csv');
            stream.pipe(writeStream);
            writeStream.on('finish', () => {
                console.log('wrote all data to file');
                stream.end();
            })
        }
    }
}