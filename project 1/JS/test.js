function backgroundcolor(){
  document.getElementById('bg').style.backgroundColor='hotpink';
}
function originalcolor(){
  document.getElementById('bg').style.backgroundColor='red';
}
function bigview(element){
  document.getElementById('viewport').style.backgroundImage="url(" + element.src + ")";
  document.getElementById('viewport').style.border="none"
  document.getElementById('viewport').innerHTML="";
}

function clear(){
  document.getElementById('viewport').style.backgroundImage="url('')";
  document.getElementById('viewport').innerHTML="This is where we view products";
}
