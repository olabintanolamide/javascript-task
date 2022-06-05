const modal = document.getElementById("register-myModal");
const secondModal = document.getElementById("login-myModal");
const registerBtn = document.getElementsByClassName("register")[0];
const loginBtn = document.getElementsByClassName("login")[0];
const closeBtn = document.getElementsByClassName("close")[0];
const secondCloseBtn = document.getElementsByClassName("close2")[0];


registerBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// loginBtn.addEventListener("click", () => {
//     modal.style.display = "block";
//   });

loginBtn.addEventListener("click", () => {
  secondModal.style.display = "block";
})


  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  secondCloseBtn.addEventListener("click", () => {
    secondModal.style.display = "none";
  });


const submitBtn = document.getElementsByClassName("submit")[0];
const testing = document.getElementById("testing");
const getStarted = document.getElementsByClassName("submit")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('hello');
    testing.style.display = "block";
    modal.style.display = "none";
});

const adding = document.getElementById("adding")[0];
const addItem = document.getElementsByClassName("addItem")[0];
const shoppingModal = document.getElementById("shopping-myModal");

adding.addEventListener("click", () => {
    shoppingModal.style.display = "block";
    console.log("help!!!")
})

