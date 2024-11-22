// Get references to the form elements
const earningsForm = document.getElementById('earnings-form');
const deductionsForm = document.getElementById('deductions-form');
const earningsList = document.getElementById('earnings-list');
const deductionsList = document.getElementById('deductions-list');

// Function to add an earning or deduction to the list
function addToList(list, type) {
  const item = document.createElement('li');
  item.innerHTML = `
    <input type="text" id="${type}-type-${list.childElementCount}" name="${type}-type-${list.childElementCount}">
    <input type="number" id="${type}-amount-${list.childElementCount}" name="${type}-amount-${list.childElementCount}">
    <button type="button" class="remove-button">X</button>
  `;
  list.appendChild(item);

  // Add event listener to the remove button
  const removeButton = item.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    list.removeChild(item);
  });
}

// Add event listeners to the add buttons
earningsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addToList(earningsList, 'Earning');
});

deductionsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addToList(deductionsList, 'Deduction');
});

// Add initial items to the lists
addToList(earningsList, 'Earning');
addToList(deductionsList, 'Deduction');