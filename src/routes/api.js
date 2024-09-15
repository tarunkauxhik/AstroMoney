const express = require('express');
const router = express.Router();
const astrologyService = require('../services/astrologyService');
const marketAnalysisService = require('../services/marketAnalysisService');
const decisionEngine = require('../utils/decisionEngine');

router.post('/advice', async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const { birthDate, birthTime, birthPlace } = req.body;

        console.log('Fetching astrology data...');
        const astroData = await astrologyService.getAstrologyData(birthDate, birthTime, birthPlace);
        console.log('Astrology data:', astroData);

        console.log('Fetching market data...');
        const marketData = await marketAnalysisService.getMarketAnalysis();
        console.log('Market data:', marketData);

        console.log('Generating advice...');
        const advice = decisionEngine.getAdvice(astroData, marketData);
        console.log('Generated advice:', advice);

        res.json({
            advice: advice.recommendation,
            astroFactors: advice.astroFactors,
            marketAnalysis: advice.marketAnalysis
        });
    } catch (error) {
        console.error('Error in /advice route:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

module.exports = router;