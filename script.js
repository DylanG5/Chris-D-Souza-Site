const hamburger=document.getElementById('hamburger-icon');

if(hamburger){
    hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('open')
})}
else{
    console.log("HI")
}

const hamburgerSub=document.getElementById('hamburger-icon-sub');
if(hamburgerSub){
    hamburgerSub.addEventListener('click',()=>{
        hamburgerSub.classList.toggle('open')
    })
}
else{
    console.log("HI - sub")
}