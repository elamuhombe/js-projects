// Get references to the input field and textarea
const inputField = document.querySelector('input');
const textareaField = document.querySelector('textarea');


// Get references to the buttons
const buttons = document.querySelectorAll('button');

// Function to append the clicked value to the textarea
function appendToTextarea(value) {
  if (value === 'c') {
    // Clear the textarea
    textareaField.value = '';
  } else if (value === '=') {
    // Evaluate the expression in the textarea and display the result in the input field
    try {
      inputField.value = eval(textareaField.value.replace('x', '*'));
    } catch (error) {
      inputField.value = 'Error';
    }
  } else if (value === '+/-') {
    // Negate the current value in the textarea
    textareaField.value = -parseFloat(textareaField.value);
  } else {
    // Append the clicked value to the textarea
    textareaField.value += value;
  }
}

// Add click event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    appendToTextarea(event.target.value);
  });
});