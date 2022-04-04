require('dotenv').config()

import Alpaca from '@alpacahq/alpaca-trade-api';

const alpaca = new Alpaca({
    keyId: process.env.APIKEYIDPAPER,
    secretKey: process.env.SECRETKEYPAPER,
    paper: true
})

// async function getAccount() {
//     alpaca.getAccount().then((account) => {
//         console.log('Current Account:', account);
//     })
// }

async function createOrder(companySymbol: string, amount: number) {
    try {
        alpaca.createOrder({
            symbol: companySymbol,
            notional: amount,
            side: 'buy',
            type: 'market',
            time_in_force: 'day'
        })
    } catch (error) {
        console.log(error);
    }
}

export { createOrder }
