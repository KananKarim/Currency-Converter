const exchange = document.querySelector("#exchange");
const worthSecond = document.querySelector("#worth-second");
const worthFirst = document.querySelector("#worth-first");
const currencyFirst = document.querySelector("#currency-first");
const currencySecond = document.querySelector("#currency-second");

updateRate()

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/037dfbe9af9150e29d80124e/latest/${currencyFirst.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecond.value];
      exchange.innerText = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value} `

      worthSecond.value = (worthFirst.value*rate)
    });

}

currencyFirst.addEventListener("change", updateRate);

currencySecond.addEventListener("change", updateRate);

worthFirst.addEventListener("input", updateRate);
