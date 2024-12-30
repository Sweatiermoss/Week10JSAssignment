// Initialize ID counter
let id = 0;

// Event listener for the "Create" button
document.getElementById('add').addEventListener('click', () => {
    // Get current date and table element
    let createDate = new Date();
    let table = document.getElementById('list');
    
    // Insert a new row in the table
    let row = table.insertRow(1);
    row.setAttribute(`id`, `item-${id}`);
    
    // Add task details to the row
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    
    // Add a delete button to the row
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    
    // Clear task input field
    document.getElementById('new-task').value = '';
});

// Function to create a delete button
function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    
    // Button click event to remove the row
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`)
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    
    return btn
}
