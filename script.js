const hamburger=document.getElementById('hamburger-icon');

if(hamburger){
    hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('open')
})}
else{
    console.log("HI")
}
