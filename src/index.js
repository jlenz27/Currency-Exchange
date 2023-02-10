import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeService.js';

//Business Logic

function getExchange() {
  let promise = ExchangeService.getExchange();
  promise.then(function(exchangeRate) {
    printElements(exchangeRate);
  }, function(error) {
    printError(error);
  });
}



//UI Logic

function printElements(currencyData) {
  const amount = document.querySelector('#amount').value;
  const currency = document.querySelector('#currency').value;
  const exchangeRate = currencyData[0]["conversion_rates"][currency];
  if (currencyData[0]["conversion_rates"][currency] === "undefined") {
    document.querySelector('#showResults').innerText = "We are unable to find the exchange rate at this time make sure you enter a valid number";
  } else {
    document.querySelector('#showResults').innerText = `$${amount} USD = ${(exchangeRate * amount).toFixed(2)} ${currency}`;
  }
}

function printError(error) {
  const errorType = Object.values(error[1]);
  document.querySelector('#showResults').innerText = `There was an error: ${errorType[3]}`;
}
function handleFormSubmission(event) {
  event.preventDefault();
  getExchange();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});