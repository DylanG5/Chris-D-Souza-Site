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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}