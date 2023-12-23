const menuHamburguesa = document.querySelector("ul");

const botonHamburguesa = document.querySelector(".menu_hamburguesa");



botonHamburguesa.addEventListener("click", (e)=>{
   if(!menuHamburguesa.className.includes("active")){
    menuHamburguesa.classList.add("active");
   } else{
    menuHamburguesa.classList.remove("active");
   }   
});


//este bloque de codigo hace que si hago click en algun ancla el menu desplegable se cierre
const click_li = document.querySelectorAll("li");

click_li.forEach((elementoAncla) =>{
elementoAncla.addEventListener("click", (e)=>{
    if(menuHamburguesa.className.includes("active")){
        menuHamburguesa.classList.remove("active");
    }

   })
});
