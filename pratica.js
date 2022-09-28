const changethemeBtn =  document.querySelector("#change-theme")

function toggleDarkMode(){
document.body.classList.toggle("dark");
}
function loadtheme() {
  const darkMod = localStorage.getItem("dark");

  if(darkMode){
    toggleDarkMode();
  }
}


changethemeBtn.addEventListener("change", function(){
    toggleDarkMode();

  localStorage.removeItem("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("dark", 1);

  }
});