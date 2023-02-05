//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

// setting the click-script for existing checkboxes

let inpchk = document.querySelectorAll("input[type=checkbox]");

function handleChkboxTgle(checkbox) {
    console.log(checkbox.checked);

    let parentRow = checkbox.parentElement.parentElement;

    console.log(parentRow);

    let deleteColumn = parentRow.querySelector(":nth-child(9)");

    removeAllChildNodes(deleteColumn);

    let editColumn = parentRow.querySelector(":nth-child(10)");
    removeAllChildNodes(editColumn);

    parentRow.bgColor = '';

    if (checkbox.checked) {
        parentRow.bgColor = 'yellow';
        deleteColumn.appendChild(getNewDeleteButton(parentRow));
        editColumn.appendChild(getNewEditButton());

    }

    toggleSubmitButtonDisabilityAndColumnsVisibility();    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function defferedAlert(text) {
    // message is shown after html rendering is over
    setTimeout(() => {
        alert(text);
    }, 100);
}

function getNewDeleteButton(tr) {
    let button = document.createElement('input');

    button.type = 'button';

    button.value = 'Delete';

    button.addEventListener('click', () => {
        tr.nextElementSibling.remove();
        tr.remove();
        toggleSubmitButtonDisabilityAndColumnsVisibility();
        defferedAlert('Record deleted successfully!');
    })

    return button;
}

function getNewEditButton() {
    let button = document.createElement('input');

    button.type = 'button';

    button.value = "Edit";
    button.addEventListener('click', () => {
        const userInput = prompt("Edit Student details!")
        console.log(userInput);
    })

  return button;
}

function toggleSubmitButtonDisabilityAndColumnsVisibility() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");

    let checked = false;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checked = true;
        }
    })

    document.querySelector("button#button").disabled = !checked;

    const deleteAndEditRows = document.querySelectorAll("#myTable td:nth-child(9),#myTable th:nth-child(9),#myTable td:nth-child(10),#myTable th:nth-child(10)");

    deleteAndEditRows.forEach(cell => {
        cell.classList.remove("visible-cell");
        if (checked) {
            cell.classList.add("visible-cell");
        }
    })

  console.log(`button disability is now ${!checked}`);
}

function toggleDropDown(img) {
    const details = img.parentElement.parentElement.nextElementSibling;
    console.log(details);

    if (details.classList.contains("dropDownTextArea")) {
        details.classList.remove("dropDownTextArea");
    }
    else {
        details.classList.add("dropDownTextArea");
    }
}

function attachInputFunctionality(input) {
    input.addEventListener('change', () => {
      handleChkboxTgle(input);
    })

    const img = input.nextElementSibling.nextElementSibling.nextElementSibling;

    img.addEventListener('click', () => {
        toggleDropDown(img);
    })

    // to set the state based on existing checked / unchecked state
    handleChkboxTgle(input);
}

// setting up the seed element for adding new student
let trs = document.querySelectorAll("#myTable tbody tr");
let seedRow = trs[1].cloneNode(true);
let seedRowDetails = trs[2].cloneNode(true);

inpchk.forEach(input => {
    attachInputFunctionality(input);
})

function addNewStudent() {
    console.log(`adding new student`);

    let tbody = document.querySelector("#myTable tbody");

    newRow = seedRow.cloneNode(true);
    newDetails = seedRowDetails.cloneNode(true);

    // hydrate the new row before adding
    const count = document.querySelectorAll("input[type=checkbox]").length + 1;

    const rows = newRow.querySelectorAll("td");

    rows[1].innerHTML = `Student ${count}`;
    rows[2].innerHTML = `Teacher ${count}`;
    rows[6].innerHTML = getRandomInt(count * 10000, count * 10000 + 9999);

    let checkbox = newRow.querySelector("input[type=checkbox]");
    attachInputFunctionality(checkbox);

    console.log(newRow);
    console.log(newDetails);

    tbody.appendChild(newRow);
    tbody.appendChild(newDetails);

    defferedAlert("New Student added successfully!");
}

let addNewButton = document.querySelector("button#add");

addNewButton.addEventListener('click', () => {
    try {
        addNewStudent();
        toggleSubmitButtonDisabilityAndColumnsVisibility();
    } catch (error) {
        alert(`Unable to add new student: ${error}`);
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
