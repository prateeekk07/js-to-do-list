const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        showCustomAlert("Please add some text !!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the state when marking/unmarking tasks
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the state after deleting a task
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

function showCustomAlert(message) {
    const alertMessage = document.getElementById("alert-message");
    alertMessage.textContent = message;
    const alertBox = document.getElementById("custom-alert");
    alertBox.style.display = "flex";
}

function closeAlert() {
    const alertBox = document.getElementById("custom-alert");
    alertBox.style.display = "none";
}

showTask();
