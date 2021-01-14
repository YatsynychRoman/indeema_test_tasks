const tableRows = [];
const addForm = document.getElementById('addForm');
const table = document.getElementById('mainTable');

addForm.addEventListener('submit', (e) => addRow(e));

function addRow(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const surname = document.getElementById('surnameInput').value;
    const emailInput = document.getElementById('mailInput');
    const email = emailInput.value;
    const regex = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
    const timestamp = Date().slice(0, 24);

    if (!regex.test(email)) {
        alert('Enter valid E-mail');
        return;
    }

    const newData = {name, surname, email, timestamp};
    tableRows.push(newData);

    const newRow = table.insertRow(tableRows.length);
    newRow.id = String(tableRows.length);

    for (let key in newData) {
        const newCell = document.createElement('td');
        newCell.innerHTML = newData[key];
        newRow.append(newCell);
    }

    const deleteBox = newRow.insertCell(0);
    deleteBox.innerHTML = `<input class="checkbox-input" type="checkbox" id="delete${tableRows.length}">`;

    const changeButton = newRow.insertCell(5);
    changeButton.innerHTML = `<button id="change${tableRows.length}" onclick="changeRow(${tableRows.length})">Edit</button>`;
}

function getMarkedRows() {
    const inputs = Array.from(document.getElementsByClassName('checkbox-input'));
    const marked = [];

    for (let input of inputs) {
        if (input.checked) marked.push(input.id.split('delete')[1]);
    }

    return marked;
}

function deleteRows() {
    const markedRowsIds = getMarkedRows();
    const rows = Array.from(document.getElementsByTagName('tr'));

    markedRowsIds.forEach(id => {
        rows.forEach(row => {
            if (row.id === id) row.remove();
        });
    });
}

function changeRow(id) {
    const row = document.getElementById(String(id));
    const changeBtn = document.getElementById(`change${id}`);
    const cells = Array.from(row.getElementsByTagName('td'));

    cells.forEach(cell => cell.contentEditable = 'true');

    changeBtn.innerHTML = 'Submit';
    changeBtn.onclick = () => {
        cells.forEach(cell => cell.contentEditable = 'false');
        changeBtn.innerHTML = 'Edit';
        changeBtn.onclick = () => changeRow(id);
    }
}