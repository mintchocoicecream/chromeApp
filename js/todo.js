const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const countryList = document.getElementById("mc-list");


const TODOS_KEY = "todos";
const COUNTRIES_KEY = "countries";

let toDos = [];
let countries = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveCountries() {
    localStorage.setItem(COUNTRIES_KEY, JSON.stringify(countries));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(li);
}

function moveToDo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    const country = li.querySelector("span").innerText;
    const newCountryobj = {
        text:country,
        id: Date.now(),
    }
    countries.push(newCountryobj);
    saveCountries();
    paintCountries(newCountryobj);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(li);   
}

function paintCountries(newCountry) {
    const li = document.createElement("li");
    li.id = newCountry.id;
    const span = document.createElement("span");
    const button1 = document.createElement("button");
    button1.innerText = "❌";
    span.innerText = newCountry.text;
    li.appendChild(span);
    li.appendChild(button1);
    countryList.appendChild(li);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.innerText = "❌";
    button2.innerText = "🌏";
    button1.addEventListener("click", deleteToDo);
    button2.addEventListener("click", moveToDo);
    li.appendChild(span);
    li.appendChild(button1);
    li.appendChild(button2);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
const savedCountries = localStorage.getItem(COUNTRIES_KEY);

if (savedToDos) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
    if(savedCountries) {
        const parseCountries = JSON.parse(savedCountries);
        countries = parseCountries;
        parseCountries.forEach(paintCountries);
    }
}