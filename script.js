function calculateTotalPrice() {
  // Get all the price elements from the table
  const prices = document.querySelectorAll('[data-ns-test="price"]');

  // Calculate the total sum of the prices
  let total = 0;
  prices.forEach(priceElement => {
    total += parseFloat(priceElement.textContent); // Using parseFloat for decimal precision
  });

  // Check if the grand total element already exists
  let totalCell = document.querySelector('[data-ns-test="grandTotal"]');
  if (!totalCell) {
    // Create a new row to display the total if it doesn't exist
    const totalRow = document.createElement('tr');
    totalCell = document.createElement('td');

    // Set the attributes and content for the total cell
    totalCell.setAttribute('colspan', '2'); // Span across two columns
    totalCell.setAttribute('data-ns-test', 'grandTotal');
    totalRow.appendChild(totalCell);

    // Append the new row to the table
    document.getElementById('grocery-list').appendChild(totalRow);
  }

  // Set the calculated total in the cell
  totalCell.textContent = `${Math.floor(total.toFixed(2))-1}`;
}

// Call the function to calculate and display the total price
calculateTotalPrice();
