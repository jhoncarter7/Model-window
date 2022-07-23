
let model = document.querySelectorAll(".open-model");
let container = document.querySelector(".container");
let blur = document.querySelector(".blur");
let cancelbtn = document.querySelector(".cancel-btn");

for (let i = 0; i < model.length; i++)
    model[i].addEventListener("click", function () {

        // here we are removing the class hidden 
        container.classList.remove("hidden")
        blur.classList.remove("hidden")
    })



//    this is cancel btn to cancel the page 

      const closemodel = function () {
        container.classList.add("hidden")
        blur.classList.add("hidden")
      }




    //   this is for button to cancel 
    cancelbtn.addEventListener("click", closemodel);

//    and this is for when we click any were on screen to cancel 
    blur.addEventListener("click", closemodel);

