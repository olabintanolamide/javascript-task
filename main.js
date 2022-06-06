const modal = document.getElementById("register-myModal");
const secondModal = document.getElementById("login-myModal");
const registerBtn = document.getElementsByClassName("register")[0];
const loginBtn = document.getElementsByClassName("login")[0];
const closeBtn = document.getElementsByClassName("close")[0];
const secondCloseBtn = document.getElementsByClassName("close2")[0];
const thirdCloseBtn = document.getElementsByClassName("close3")[0];

registerBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// loginBtn.addEventListener("click", () => {
//     modal.style.display = "block";
//   });

loginBtn.addEventListener("click", () => {
  secondModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

secondCloseBtn.addEventListener("click", () => {
  secondModal.style.display = "none";
});

thirdCloseBtn.addEventListener("click", () => {
  shoppingModal.style.display = "none";
});

const submitBtn = document.getElementsByClassName("submit")[0];
const getStarted = document.getElementsByClassName("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello");
  modal.style.display = "none";
});

//const ulTag = document.getElementById("class-list");
const genLi = document.createElement("li");
const addItem = document.getElementsByClassName("addItem")[0];
const shoppingModal = document.getElementById("shopping-myModal");
const itemBtn = document.getElementsByClassName("item-button")[0];
const getItem = document.getElementsByClassName("get-item")[0];

addItem.addEventListener("click", (e) => {
  e.preventDefault();
  // genLi.textContent = "fight";
  // ulTag.append(genLi);
  shoppingModal.style.display = "none";
});

getItem.addEventListener("click", (e) => {
  e.preventDefault();
  itemBtn.style.display = "block";
  secondModal.style.display = "none";
});

itemBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("hey!");
  shoppingModal.style.display = "block";
});

const inputText = document.querySelector("#shopping-item");
const myButton = document.querySelector('.addItem');
const list = document.querySelector(".container ul");

myButton.addEventListener('click', (e) => {
  if(inputText.value != ""){
    e.preventDefault();
  //creating li
    const myLi = document.createElement('li');
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);
  //creating span
  const mySpan = document.createElement('span');
  mySpan.innerHTML = 'x';
  myLi.appendChild(mySpan);
  }
  inputText.value = "";
});

// const closeList = document.querySelectorAll('span');


// for(let i = 0; i<closeList.length; i++){
//   close[i].addEventListener('click', () => {
//     close[i].parentElement.style.display = "none";
//     console.log("work")
//   })
// }
