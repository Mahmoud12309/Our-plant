let bar = document.querySelector(".bar"),
nav = document.querySelector(".nav"),
input_search = document.querySelector(".ser-b"),
input_i = document.querySelector(".ser-i");
bar.addEventListener('click',() => {
  bar.classList.toggle("active");  
  nav.classList.toggle("active");  
});

input_i.addEventListener('click',() => {
  if(input_search.value !== ""){
    if (input_search.value === "home" || input_search.value === "about" || input_search.value === "services" || input_search.value === "blog"){
      window.location.href =`#${input_search.value}`;
    }
  }else{

  }
});
