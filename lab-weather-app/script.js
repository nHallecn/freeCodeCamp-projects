const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");

async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    
    // Crucial for passing the Error tests:
    // fetch does not throw on 404, so we must check response.ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // Explicitly return nothing/undefined so showWeather knows it failed
    return null; 
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  // If getWeather returned null/undefined (due to error), show alert
  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const { weather, main, wind, name } = data;

  // Helper to handle N/A logic
  const getValue = (val) => (val === undefined ? "N/A" : val);

  document.getElementById("location").textContent = getValue(name);
  // Handle nested weather array safely
  document.getElementById("weather-icon").src = weather?.[0]?.icon || "";
  document.getElementById("weather-main").textContent = getValue(weather?.[0]?.main);
  
  // Handle main object
  document.getElementById("main-temperature").textContent = getValue(main?.temp);
  document.getElementById("feels-like").textContent = getValue(main?.feels_like);
  document.getElementById("humidity").textContent = getValue(main?.humidity);
  
  document.getElementById("wind").textContent = getValue(wind?.speed);
  document.getElementById("wind-gust").textContent = getValue(wind?.gust);
}

getWeatherBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (selectedCity) {
    showWeather(selectedCity);
  }
});
