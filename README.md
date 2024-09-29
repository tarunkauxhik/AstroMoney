# AstroMoney

AstroMoney is a financial horoscope web application that combines Vedic astrology with real-time market data. By integrating astrology and financial market analysis, AstroMoney generates financial advice and predictions tailored to an individual's astrological profile.

## Features

- **Personalized Financial Horoscope**: Offers financial guidance based on the user's astrological birth chart.
- **Market Insights**: Uses real-time market data via the Alpha Vantage API.
- **Vedic Astrology**: Analyzes the user's astrological data according to Hindu Vedic signs.
- **Simple and Intuitive Interface**: Provides an easy-to-use UI for financial and astrological insights.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **APIs Used**:
  - [AstrologyAPI](https://astrologyapi.com/) for Vedic astrology data.
  - [Alpha Vantage](https://www.alphavantage.co/) for financial market data.

## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/tarunkauxhik/AstroMoney.git
    cd AstroMoney
    ```

2. **Install Dependencies**:
    Ensure you have Node.js installed. Then, run:
    ```bash
    npm install
    ```

3. **Environment Variables**:
    Set up the following environment variables for API keys:

    - `ASTROLOGY_API_KEY`: API key from [AstrologyAPI](https://astrologyapi.com/).
    - `ALPHA_VANTAGE_API_KEY`: API key from [Alpha Vantage](https://www.alphavantage.co/).

    You can set these in a `.env` file in the root directory:
    ```
    ASTROLOGY_API_KEY=your_astrology_api_key
    ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
    ```

**Note**: Please verify that your API keys are working before testing the application to ensure proper functionality.

4. **Run the Application**:
    ```bash
    npm start
    ```

    The application will run on `http://localhost:3000`.


## Usage

1. Navigate to the homepage.
2. Enter your birth details (date, time, and place) to get your personalized Vedic astrological profile.
3. View your customized financial horoscope and real-time market insights based on your astrological data.
4. Use the financial advice to inform your decisions.

## Roadmap

- Expand support to include additional astrology systems.
- Enhance the UI for better user experience.
- Integrate more financial data sources.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request. Your input is valuable for improving the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
