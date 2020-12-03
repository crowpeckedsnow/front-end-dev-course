function backgroundcolor(){
  document.getElementById('bg').style.backgroundColor='hotpink';
}
function originalcolor(){
  document.getElementById('bg').style.backgroundColor='red';
}
function bigview(element){
  document.getElementById('viewport').style.backgroundImage="url(" + element.src + ")";
}
