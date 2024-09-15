const fetch = require('node-fetch');

const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';

async function getMarketAnalysis() {
    console.log('getMarketAnalysis called');

    try {
        const url = `${ALPHA_VANTAGE_BASE_URL}?function=GLOBAL_QUOTE&symbol=SPY&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;
        console.log('Fetching from URL:', url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Alpha Vantage API responded with status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Alpha Vantage API response:', data);

        if (!data['Global Quote']) {
            throw new Error('Unexpected response format from Alpha Vantage API');
        }

        return data['Global Quote'];
    } catch (error) {
        console.error('Error fetching market data:', error);
        throw error;
    }
}

module.exports = { getMarketAnalysis };