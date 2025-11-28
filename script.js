// Selecting all required DOM elements
// (These connect our JS to HTML)
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const transactionList = document.getElementById("transactionList");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// Array to store all transactions (income + expenses)
let transactions = [];

// Function runs whenever the form is submitted
function addTransaction(e) {
  e.preventDefault(); // Prevent page reload on submit

  // Validating input fields
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please enter text and amount");
    return;
  }

  // Creating a transaction object
  // id helps uniquely identify each item
  const transaction = {
    id: Date.now(), // unique ID
    text: text.value,
    amount: +amount.value, // convert to number
  };

  // Add transaction to main array
  transactions.push(transaction);

  // Update UI after adding
  updateDOM();

  // Clear input fields after submit
  text.value = "";
  amount.value = "";
}

// Function to update Balance, Income, Expense and List
function updateDOM() {
  // Clear old list items before re-rendering
  transactionList.innerHTML = "";

  // Extract only the amounts from all transactions
  const amounts = transactions.map((t) => t.amount);

  // Calculate total balance
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  // Calculate total income (positive values)
  const incomeTotal = amounts
    .filter((v) => v > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  // Calculate total expenses (negative values)
  const expenseTotal = (
    amounts.filter((v) => v < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  // Update values in UI
  balance.innerText = `₹${total}`;
  income.innerText = `₹${incomeTotal}`;
  expense.innerText = `₹${expenseTotal}`;

  // Creating list items dynamically
  transactions.forEach((transaction) => {
    const sign = transaction.amount < 0 ? "-" : "+";

    // Create a new list (li) element
    const item = document.createElement("li");

    // Add appropriate class for styling
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    // Fill list item with text, amount and delete button
    item.innerHTML = `
      ${transaction.text}
      <span>${sign}₹${Math.abs(transaction.amount)}</span>
      <button class="delete-btn" onclick="removeTransaction(${
        transaction.id
      })">x</button>
    `;

    // Add the item into the ul
    transactionList.appendChild(item);
  });
}

// Remove transaction using its ID
function removeTransaction(id) {
  // Filter out the deleted transaction
  transactions = transactions.filter((t) => t.id !== id);

  // Update UI again
  updateDOM();
}

// Event listener for form submit
form.addEventListener("submit", addTransaction);
