let hampic = document.querySelector(".hampic")
let ham = document.getElementById("hamenu")


hampic.addEventListener("click", ()=>{

   
    if(ham.style.visibility == "visible" || ham.style.display=="block"){
        ham.style.visibility = "hidden"
        ham.style.display ="none"
    }
    else if(ham.style.visibility == "hidden" || ham.style.display=="block"){
        ham.style.visibility = "visible"
        ham.style.display=="block"
    }
})
