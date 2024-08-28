// script.js

function updateTotalPrice() {
    const priceElements = document.querySelectorAll('td[data-ns-test="prices"]');

    if (priceElements.length === 0) {
        console.error('No price elements found.');
        return;
    }

    let total = 0;

    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        total += price;
    });

    const table = document.getElementById('groceryTable');
    const newRow = document.createElement('tr');

    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = `Total: $${total.toFixed(2)}`;
    totalCell.setAttribute('data-ns-test', 'grandTotal'); // Ensure attribute is set

    newRow.appendChild(totalCell);
    table.querySelector('tbody').appendChild(newRow);
}

window.onload = updateTotalPrice; // Ensure this runs after the page is fully loaded
