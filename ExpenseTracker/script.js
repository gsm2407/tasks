// Select form and elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');

let expenses = [];
let totalAmount = 0;

// Function to update the total amount spent
function updateTotalAmount() {
    totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
}

// Function to render the expense list
function renderExpenses() {
    expenseList.innerHTML = ''; // Clear existing list

    expenses.forEach((expense, index) => {
        const tr = document.createElement('tr');
        
        const amountTd = document.createElement('td');
        amountTd.textContent = `$${expense.amount.toFixed(2)}`;

        const descriptionTd = document.createElement('td');
        descriptionTd.textContent = expense.description;

        const actionTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteExpense(index);
        });

        actionTd.appendChild(deleteBtn);
        tr.appendChild(amountTd);
        tr.appendChild(descriptionTd);
        tr.appendChild(actionTd);

        expenseList.appendChild(tr);
    });
}

// Function to add a new expense
function addExpense(amount, description) {
    const expense = {
        amount: parseFloat(amount),
        description: description
    };
    expenses.push(expense);
    renderExpenses();
    updateTotalAmount();
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
    updateTotalAmount();
}

// Handle form submission
expenseForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (amount && description) {
        addExpense(amount, description);

        // Clear form
        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
    }
});
