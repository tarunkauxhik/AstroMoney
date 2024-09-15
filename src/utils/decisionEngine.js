function getAdvice(astroData, marketData) {
    // This is a simplified decision engine. You should expand this based on astrological principles and financial analysis.
    const ascendant = astroData.ascendant;
    const marketChange = parseFloat(marketData['09. change']);

    let recommendation = '';
    let astroFactors = '';
    let marketAnalysis = '';

    // Astrological factor
    if (['Aries', 'Leo', 'Sagittarius'].includes(ascendant)) {
        astroFactors = 'Your ascendant sign indicates a good time for financial risks.';
    } else if (['Taurus', 'Virgo', 'Capricorn'].includes(ascendant)) {
        astroFactors = 'Your ascendant sign suggests caution in financial matters.';
    } else {
        astroFactors = 'Your ascendant sign indicates a balanced approach to finances.';
    }

    // Market factor
    if (marketChange > 0) {
        marketAnalysis = 'The market is showing positive trends.';
    } else if (marketChange < 0) {
        marketAnalysis = 'The market is showing negative trends.';
    } else {
        marketAnalysis = 'The market is relatively stable.';
    }

    // Combined decision
    if ((['Aries', 'Leo', 'Sagittarius'].includes(ascendant) && marketChange > 0) ||
        (['Taurus', 'Virgo', 'Capricorn'].includes(ascendant) && marketChange < 0)) {
        recommendation = 'This might be a good time to consider spending or investing.';
    } else {
        recommendation = 'It might be wise to be cautious with spending at this time.';
    }

    return { recommendation, astroFactors, marketAnalysis };
}

module.exports = { getAdvice };