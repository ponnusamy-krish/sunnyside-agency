let hampic = document.querySelector(".hampic")
let ham = document.getElementById("hamenu")


hampic.addEventListener("click", ()=>{
    if(ham.style.display == "none" ){
        
        ham.style.display="block"
    }
   
<<<<<<< HEAD
   else if(ham.style.display == "block" ){
        ham.style.display = "none"
       
=======
    if(ham.style.visibility == "visible" || ham.style.display=="block"){
        ham.style.visibility = "hidden"
        ham.style.display ="none"
    }
    else if(ham.style.visibility == "hidden" || ham.style.display=="block"){
        ham.style.visibility = "visible"
        ham.style.display=="block"
>>>>>>> ecadc1756af60e2e7ad5d3a2297edb7b1ffb4425
    }
   
})
