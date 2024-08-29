// Function to show the taskform
function showForm(){
    document.getElementById('task-form-container').style.display = 'block';
}
// Function to hide the task form
function hideForm(){
    document.getElementById('task-form-container').style.display = 'none';
}
// Function to append task name to todo-list 
function appendItem() {
    // Select the todo-list container element
    let itemList = document.querySelector('.todo-list');

    // Select the input field for task name
    let itemName = document.querySelector('#task-name');
    
    // Get the value of the task name input field
    let itemNameValue = itemName.value;

    // Check if the task name is not empty
    if (itemNameValue) {
        // Create a new list item element
        let newItem = document.createElement('ul');

        // Create a checkbox for the new task item
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        newItem.append(checkbox);

        // Create a label for the task item with the new task item
        let label = document.createElement('span');
        label.textContent = itemName.value;
        label.classList.add('task-label');
        newItem.append(label);

        // Create an edit button for the task item
        let button = document.createElement('button');
        button.classList.add('editButton');
        button.textContent = 'Edit'
        newItem.append(button)

        // Create a delete button for the task item
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'Delete';
        newItem.append(deleteButton);

        // Create hr
        let hrDiv = document.createElement('div');
        let hr = document.createElement('hr');
        // Append the hr to the div element
        hrDiv.appendChild(hr);

        newItem.append(hrDiv);
        // Append the new task item to the todo-list
        itemList.appendChild(newItem);

        // Clear the task name input field
        itemName.value = '';

        // Hide the task input form (function assumed to be defined elsewhere)
        hideForm();
    }
}
