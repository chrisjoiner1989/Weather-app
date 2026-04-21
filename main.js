const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".cities");

const iconMap = {
  "01d": "sun.svg",
  "01n": "moon.svg",
  "02d": "cloud-sun.svg",
  "02n": "cloud-moon.svg",
  "03d": "cloud.svg",
  "03n": "cloud.svg",
  "04d": "cloud.svg",
  "04n": "cloud.svg",
  "09d": "cloud-drizzle.svg",
  "09n": "cloud-drizzle.svg",
  "10d": "cloud-rain.svg",
  "10n": "cloud-rain.svg",
  "11d": "cloud-lightning.svg",
  "11n": "cloud-lightning.svg",
  "13d": "cloud-snow.svg",
  "13n": "cloud-snow.svg",
  "50d": "cloud-fog.svg",
  "50n": "cloud-fog.svg",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = input.value.trim();
  if (!inputVal) {
    msg.textContent = "Please enter a city name";
    return;
  }

  const url = `/api/weather?q=${encodeURIComponent(inputVal)}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `assets/weather-icons/${iconMap[weather[0]["icon"]] || "cloud.svg"}`;
      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
<h2 class="city-name" data-name="${name},${sys.country}">
<span>${name}</span>
<sup>${sys.country}</sup>
</h2>
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
</div>
<figure>
<img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
<figcaption>${weather[0]["description"]}</figcaption>
</figure>
`;
      li.innerHTML = markup;
      list.appendChild(li);

      msg.textContent = "";
      form.reset();
      input.focus();
    })
    .catch(() => {
      msg.textContent = "Please search for valid city!";
    });
});
