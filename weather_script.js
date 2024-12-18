// Fetch weather data from OpenWeatherMap API
const apiKey = 'd669c374c778a22d02a9e5d59b64dc91';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const weatherCondition = data.weather[0].description;

        console.log(`Temperature: ${temperature}°C`);
        console.log(`Humidity: ${humidity}%`);
        console.log(`Weather Condition: ${weatherCondition}`);
    })
    .catch(error => console.error('Error fetching weather data:', error));

// In this example, we fetch weather data from the OpenWeatherMap API using the fetch() function. We then extract the temperature, humidity, and weather condition from the response data and log them to the console. The data is displayed in the console as follows:
//  Temperature: 15.37°C
//  Humidity: 72%
//  Weather Condition: broken clouds

