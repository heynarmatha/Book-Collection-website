const btnOpen = document.querySelector(".but-open");
const modelContainer = document.querySelector(".model-container");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click" , function(){
   modelContainer.classList.add("show");
});

btnClose.addEventListener("click" , function(){
   modelContainer.classList.remove("show");
});



const btnOpen2 = document.querySelector(".but-open2");
const modelContainer2 = document.querySelector(".model-container2");
const btnClose2 = document.querySelector(".btn-close2");

btnOpen2.addEventListener("click" , function(){
   modelContainer2.classList.add("show");
});

btnClose2.addEventListener("click" , function(){
   modelContainer2.classList.remove("show");
});

const btnOpen3 = document.querySelector(".but-open3");
const modelContainer3 = document.querySelector(".model-container3");
const btnClose3 = document.querySelector(".btn-close3");

btnOpen3.addEventListener("click" , function(){
   modelContainer3.classList.add("show");
});

btnClose3.addEventListener("click" , function(){
   modelContainer3.classList.remove("show");
});

