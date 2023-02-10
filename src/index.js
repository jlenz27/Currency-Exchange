import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './ExchangeService.js';


//Business Logic

function getExchange() {
  let promise = ExchangeService.getExchange();
  promise.then(function(exchangeRate) {
    printElements(exchangeRate);
  }, function(error) {
    printError(error);
  });
}

function printElements(currencyData) {

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