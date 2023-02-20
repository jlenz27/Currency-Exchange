// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import ExchangeService from './exchangeService.js';

// //Business Logic

// function getExchange(amount, currency) {
//   ExchangeService.getExchangeRate(currency)
//     .then(function(currencyResponse) {
//       if (currencyResponse instanceof Error) {
//         const errorMessage = `there was a problem accessing the data from currency exchange request: ${currencyResponse.message}.`;
//         throw new Error(errorMessage);
//       }
//       printElements(currency,amount);
//     })
//     .catch(function(error) {
//       printError(error);
//     });
// }


// //UI Logic

// function printElements(currencyData, amount, currency) {
//   const exchangeRate = currencyData[0]["conversion_rates"][currency];
//   if (currencyData[0]["conversion_rates"][currency] === undefined) {
//     document.querySelector('#showResults').innerText = "We are unable to find the exchange rate at this time make sure you enter a valid number";
//   } else {
//     document.querySelector('#showResults').innerText = `$${amount} USD = ${(exchangeRate * amount).toFixed(2)} ${currency}`;
//   }
// }

// function printError(error) {
//   document.querySelector('#showResults').innerText = error;
// }
// function handleFormSubmission(event) {
//   event.preventDefault();
//   const amount = document.querySelector('#amount').value;
//   const currency = document.querySelector('#currency').value;
//   getExchange(amount,currency);
// }

// window.addEventListener("load", function() {
//   document.querySelector('form').addEventListener("submit", handleFormSubmission);
// });


export default class ExchangeService {  
    static async getExchangeRate() {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
        const jsonifiedResponse = await response.json();
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}
          ${jsonifiedResponse.message}`;
          throw new Error(errorMessage);
        }
        return jsonifiedResponse;
      } catch(error) {
        return error;
      }
    }
  } 