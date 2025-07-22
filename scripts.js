const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em real
  const currencyValueToConverted = document.querySelector(".currency-value"); // Outras moedas

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 5.8;
  const btcToday = 10;

  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue/libraToday);
  }

  if (currencySelect.value == "bitcoin"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue*btcToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/usa.png"
    }

    if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
      currencyName.innerHTML = "Libra"
      currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
      currencyName.innerHTML = "Bitcoin"
      currencyImage.src = "./assets/bitcoin.png"
    }
    

    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
