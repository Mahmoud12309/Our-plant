let bar = document.querySelector(".bar"),
nav = document.querySelector(".nav");
bar.addEventListener('click',() => {
  bar.classList.toggle("active");  
  nav.classList.toggle("active");  
});