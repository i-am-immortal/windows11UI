let taskBar = document.getElementsByClassName("taskBar")[0];
let menu = document.getElementsByClassName("start")[0];
taskBar.addEventListener("click", () => {
  //   console.log("hello ");
  if (menu.style.bottom == "50px") {
    menu.style.bottom = "-650px";
  } else {
    menu.style.bottom = "50px";
  }
});
