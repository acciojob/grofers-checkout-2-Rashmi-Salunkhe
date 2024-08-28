//your code here
// script.js

// Function to calculate total price and update table
function updateTotalPrice() {
    // Get all price cells using querySelectorAll
    const priceElements = document.querySelectorAll('td[data-ns-test="prices"]');

    let total = 0;

    // Iterate over each price cell to calculate total
    priceElements.forEach(priceElement => {
        // Parse the price and add to total (removing the '$' sign and converting to float)
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        total += price;
    });

    // Create a new row for the total price
    const table = document.getElementById('groceryTable');
    const newRow = document.createElement('tr');

    // Create a cell for the total price
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = `Total: $${total.toFixed(2)}`;
    totalCell.setAttribute('data-ns-test', 'grandTotal'); // Adding data attribute for test case

    // Append the cell to the new row, and the row to the table
    newRow.appendChild(totalCell);
    table.querySelector('tbody').appendChild(newRow);
}

// Call the function to update total price on page load
updateTotalPrice();
