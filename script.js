
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

    cancelbtn.addEventListener("click", ()=>{
        container.classList.add("hidden")
        blur.classList.add("hidden")
    })
