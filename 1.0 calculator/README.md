# Calculator App

This is a simple calculator app built with HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Input Field**: Users can input numbers and mathematical operators.
- **Textarea**: Displays the expression entered by the user and the result of the evaluation.
- **Buttons**: Clickable buttons for inputting numbers and operations.

## Getting Started

To use this calculator app, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```
   git clone <repository-url>
   ```

2. **Open `index.html`**: Open the `index.html` file in your web browser.

3. **Start Calculating**: Use the input field and buttons to input numbers and perform calculations.

## HTML Structure

The HTML file (`index.html`) includes:

- **Metadata**: Specifies character encoding and viewport settings for responsive design.
- **Stylesheets**: Links to external stylesheets, including Tailwind CSS for styling.
- **JavaScript Library**: Links to Material-UI icons for potential use in the app.
- **Body**: Contains the form with a textarea for displaying the expression, an input field for the result, and buttons for inputting values and operations.

### Body Elements

- **Form**: Contains the main elements of the calculator.
  - **Textarea**: Displays the current expression. It is read-only to prevent manual edits.
  - **Input Field**: Displays the result of the evaluated expression. It is read-only to prevent manual edits.
  - **Buttons**: Various buttons for inputting numbers, operations, and controlling the calculator (clear, evaluate, negate).

## JavaScript Functionality

The JavaScript file (`src/js/script.js`) includes the logic for the calculator:

### Elements

- **inputField**: References the input field element.
- **textareaField**: References the textarea element.
- **buttons**: References all button elements.

### Functions

- **appendToTextarea(value)**: Handles appending values to the textarea and performing operations based on the button clicked.
  - Clears the textarea if the 'C' button is clicked.
  - Evaluates the expression if the '=' button is clicked.
  - Negates the current value if the '+/-' button is clicked.
  - Appends the clicked value to the textarea for all other buttons.

### Event Listeners

- **buttons.forEach(button => { ... })**: Adds click event listeners to all buttons to handle user interactions.

## Usage

The calculator supports the following operations:

- **Addition**: Use the `+` button.
- **Subtraction**: Use the `-` button.
- **Multiplication**: Use the `x` button.
- **Division**: Use the `/` button.
- **Clear**: Use the `C` button to clear the input.
- **Evaluate**: Use the `=` button to evaluate the expression.
- **Negation**: Use the `+/-` button to negate the current value.
- **Parentheses**: Use the `()` button to include parentheses in the expression.
- **Percentage**: Use the `%` button for percentage calculations.
- **Decimal Point**: Use the `.` button to include a decimal point.

## Example

Suppose you want to calculate `2 + 3 * 4`. Here's how you can do it:

1. Input `2` using the buttons.
2. Click the `+` button.
3. Input `3` using the buttons.
4. Click the `x` button.
5. Input `4` using the buttons.
6. Click the `=` button to get the result `14`.

## Notes

- This calculator follows the standard order of operations.
- The expression in the textarea supports parentheses for grouping operations.
- Avoid dividing by zero, as it will result in an error message.

Feel free to explore the code and customize it according to your needs!

---
