var btnPlus = document.getElementsByClassName("fa-plus")
console.log(btnPlus);
for(let i=0; i < btnPlus.length; i++){
btnPlus[i].addEventListener("click", function(){
    btnPlus[i].nextElementSibling.innerhtml++
})
}
