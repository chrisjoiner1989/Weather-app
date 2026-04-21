const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = input.value;
  const url = `/api/weather?q=${encodeURIComponent(inputVal)}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
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
