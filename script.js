const climateData = {
  london: {
    climate: "Temperate Oceanic",
    temp: "10-20°C",
    rainfall: "Moderate rainfall year-round"
  },
  cairo: {
    climate: "Hot Desert",
    temp: "20-40°C",
    rainfall: "Very low rainfall"
  },
  mumbai: {
    climate: "Tropical Wet and Dry",
    temp: "25-35°C",
    rainfall: "Heavy monsoon rains (Jun–Sep)"
  },
  newyork: {
    climate: "Humid Subtropical",
    temp: "-5 to 30°C",
    rainfall: "Moderate rainfall and snowfall"
  },
  tokyo: {
    climate: "Humid Subtropical",
    temp: "5-30°C",
    rainfall: "Rainy summers, mild winters"
  }
};

function showClimate() {
  const city = document.getElementById("city").value;
  const info = climateData[city];

  if (info) {
    document.getElementById("climate-result").innerHTML = `
      <h2>${city.charAt(0).toUpperCase() + city.slice(1)}</h2>
      <p><strong>Climate Type:</strong> ${info.climate}</p>
      <p><strong>Typical Temperature:</strong> ${info.temp}</p>
      <p><strong>Rainfall:</strong> ${info.rainfall}</p>
    `;
  } else {
    document.getElementById("climate-result").innerHTML = "";
  }
}
