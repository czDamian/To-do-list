const addTask = document.getElementById("create-list");
const listContainer = document.getElementById("list-container");



function createTask() {
  if (addTask.value === "") {
    alert("Type a task first!!!");
    saveData();
  } else {
    let li = document.createElement("li");
    li.innerHTML = addTask.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
    saveData();
  }
  addTask.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
  saveData();
})

// save data to localstorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}


// display data from localstorage
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
