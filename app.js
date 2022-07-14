let hampic = document.querySelector(".hampic")
let ham = document.getElementById("hamenu")


hampic.addEventListener("click", ()=>{

   
    if(ham.style.visibility == "visible"){
        ham.style.visibility = "hidden"
    }
    else if(ham.style.visibility == "hidden"){
        ham.style.visibility = "visible"
    }
})
// document.addEventListener("click" ,()=>{
//     ham.style.visibility = "hidden"
// })
