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
  let inpl = input_search.value.toLocaleLowerCase();
  window.location.href = `#${inpl}`;
  }else{

  }
});
