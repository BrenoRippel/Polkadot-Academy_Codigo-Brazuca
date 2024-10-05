const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const INTERVAL_DURATION = 60000; // 1 minute in milliseconds
let transactionCount = 0;
let timerStarted = false; // To check if the timer has started

// Check local storage for theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  body.classList.add("light");
  themeToggle.checked = false; // Start with light theme
} else {
  body.classList.remove("light");
  themeToggle.checked = true; // Start with dark theme
}

// Event listener for the toggle switch
themeToggle.addEventListener("change", () => {
  body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "light" : "dark"
  );
});

// Add event listener to calculate button
document.getElementById("calculate").addEventListener("click", () => {
  const transactionValue = parseFloat(
    document.getElementById("transaction-value").value
  );
  const complexity = document.getElementById("complexity").value;
  const currencyConversion = document.getElementById(
    "currency-conversion"
  ).value;

  if (isValidTransactionValue(transactionValue)) {
    const gasPrice = calculateGasPrice(transactionValue, complexity);
    displayResult(transactionValue, complexity, gasPrice, currencyConversion);
    updateTransactionCounter();
    saveTransactionToHistory(
      transactionValue,
      complexity,
      gasPrice,
      currencyConversion
    );

    const historyContainer = document.getElementById("history-container");
    historyContainer.style.display = "block"; // Show the history container

    // Start the timer after the first transaction
    if (!timerStarted) {
      initializeResultClearingTimer();
      timerStarted = true; // Prevent the timer from starting again
    }
  } else {
    showError("Please enter a valid transaction value.");
  }
});

// Validate transaction value
function isValidTransactionValue(value) {
  return !isNaN(value) && value > 0;
}

// Calculate gas price based on value and complexity
function calculateGasPrice(value, complexity) {
  const gasMultipliers = {
    low: 0.01,
    medium: 0.05,
    high: 0.1,
  };
  return value * (gasMultipliers[complexity] || 0);
}

// Display the result
function displayResult(transactionValue, complexity, gasPrice, currency) {
  const resultDiv = document.getElementById("result");
  let resultText = generateTransactionText(
    transactionValue,
    complexity,
    gasPrice,
    currency
  );
  resultDiv.innerHTML = resultText;
}

// Generate transaction text for display
function generateTransactionText(value, complexity, gasPrice, currency) {
  let text = `Transaction: ${value} DOT, Complexity: ${complexity}, Estimated Gas Price: ${gasPrice} DOT`;
  if (currency) {
    const convertedValue = convertCurrency(gasPrice, currency);
    text += ` or ${convertedValue} ${currency}`;
  }
  return text;
}

// Convert currency (dummy conversion for demo purposes)
function convertCurrency(value, currency) {
  const conversionRates = {
    USD: 4.11, // Example rate, adjust as necessary
    EUR: 3.75,
    BRL: 22.44,
  };

  return (value * conversionRates[currency]).toFixed(2);
}

// Update transaction counter
function updateTransactionCounter() {
  transactionCount += 1;
  const counterDiv = document.getElementById("transaction-counter");
  counterDiv.style.display = "block";
  counterDiv.innerText = `Simulated Transactions: ${transactionCount}`;
}

// Save transaction to history
function saveTransactionToHistory(value, complexity, gasPrice, currency) {
  const historyDiv = document.getElementById("history");
  const transactionEntry = document.createElement("div");
  transactionEntry.innerText = generateTransactionText(
    value,
    complexity,
    gasPrice,
    currency
  );
  historyDiv.insertBefore(transactionEntry, historyDiv.firstChild);
}

// Display error message
function showError(message) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.innerText = message;
  errorDiv.style.display = "block";
}

// Timer logic to clear displayed result every minute
function initializeResultClearingTimer() {
  setInterval(() => {
    document.getElementById("result").innerHTML = ""; // Clear the result div every minute
  }, INTERVAL_DURATION);
}
