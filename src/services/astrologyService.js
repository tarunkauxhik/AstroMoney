const fetch = require('node-fetch');
const moment = require('moment-timezone');

const ASTROLOGY_API_BASE_URL = 'https://json.astrologyapi.com/v1';

async function getAstrologyData(birthDate, birthTime, birthPlace) {
    console.log('getAstrologyData called with:', { birthDate, birthTime, birthPlace });

    const [year, month, day] = birthDate.split('-');
    const [hour, minute] = birthTime.split(':');

    const timestamp = moment.tz(`${year}-${month}-${day} ${hour}:${minute}`, birthPlace).unix();

    const body = {
        day: parseInt(day),
        month: parseInt(month),
        year: parseInt(year),
        hour: parseInt(hour),
        min: parseInt(minute),
        lat: 0, // You'll need to use a geocoding service to get lat/long from birthPlace
        lon: 0,
        tzone: 0
    };

    console.log('Request body:', body);

    try {
        const response = await fetch(`${ASTROLOGY_API_BASE_URL}/general_ascendant_report`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(process.env.ASTROLOGY_API_KEY).toString('base64')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Astrology API responded with status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Astrology API response:', data);
        return data;
    } catch (error) {
        console.error('Error fetching astrology data:', error);
        throw error;
    }
}

module.exports = { getAstrologyData };