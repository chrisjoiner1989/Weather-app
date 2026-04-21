# Weather App

Hey! This is a little weather app I built to practice working with APIs. You type in a city name and it shows you the current weather there. Pretty simple but I learned a lot making it.

## What it does

- Search for any city and get the current temp + weather description
- Shows a little icon depending on the weather (sunny, cloudy, rain, etc)
- You can search multiple cities and they stack up on the page
- Temps are in Celsius

## How it works

The frontend is just plain HTML, CSS and JavaScript (no framework, wanted to keep it simple). When you submit the form it calls `/api/weather` on my own little Express server, and the server forwards the request to the OpenWeather API.

I originally had the API call going straight from the browser but then I realized my API key was exposed in the devtools for anyone to grab so I added the Express server as a proxy to hide the key in a `.env` file. Much better.

## Running it locally

You'll need Node installed. Then:

1. Clone the repo
2. Run `npm install`
3. Make a `.env` file in the root and add your OpenWeather API key like this:

   ```
   OPENWEATHER_API_KEY=your_key_here
   ```

   You can get a free key from https://openweathermap.org/api

4. Run `npm run dev` (uses nodemon so it restarts when you change stuff) or `npm start` for normal mode
5. Open http://localhost:3000 in your browser

## Stuff I used

- Express for the server
- dotenv for keeping the API key secret
- OpenWeather API for the actual weather data
- Some free weather icons I found

## Things I might add later

- Maybe store recent searches in localStorage so they don't disappear on refresh
- A toggle for Fahrenheit vs Celsius
- Better error messages
- Clean up the CSS, it got kinda messy

Feel free to open an issue if something breaks!
