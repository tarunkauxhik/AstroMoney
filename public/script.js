document.getElementById('birthdataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    const birthPlace = document.getElementById('birthPlace').value;

    try {
        const response = await fetch('/api/advice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ birthDate, birthTime, birthPlace }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        document.getElementById('result').innerHTML = `
            <h2>Advice</h2>
            <p>${data.advice}</p>
            <h3>Astrological Factors</h3>
            <p>${data.astroFactors}</p>
            <h3>Market Analysis</h3>
            <p>${data.marketAnalysis}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = '<p>An error occurred. Please try again.</p>';
    }
});