require('dotenv').config()

import Alpaca from '@alpacahq/alpaca-trade-api';

const alpaca = new Alpaca({
    keyId: process.env.APIKEYIDPAPER,
    secretKey: process.env.SECRETKEYPAPER,
    paper: true
})

async function getAccount() {
    alpaca.getAccount().then((account) => {
        console.log('Current Account:', account);
    })
}

async function createOrder() {
    try {
        alpaca.createOrder({
            symbol: "AMZN",
            qty: 1,
            notional: 1,
            side: 'buy',
            type: 'market',
            time_in_force: 'day'
        })
    } catch (error) {
        console.log(error);
    }
}

