var splashScreen=document.querySelector(".splashScreen");
splashScreen.addEventListener("click",()=>{
  splashScreen.computedStyleMap.opacity=0;
  setTimeout(()=>{
    splashScreen.classList.add("hide")
  },4000)
})

