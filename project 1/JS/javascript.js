function backgroundcolor(){
  document.getElementById('bg').style.backgroundColor='hotpink';
}
function originalcolor(){
  document.getElementById('bg').style.backgroundColor='red';
}
function bigview(element){
  document.getElementById('viewport').style.backgroundImage="url(" + element.src + ")";
  document.getElementById('viewport').innerHTML="";
}
function unDo(){
  document.getElementById('viewport').style.backgroundImage="";
  document.getElementById('viewport').innerHTML="This is where we view products";
}
var orders = ["cotton candy", "gumdrops", "lollipops"];
var i=0;
var orderlist="<ul>";

function loadOrders(){
  for (i=0; i < orders.length; i++){
    orderlist += "<li>" + orders[i] + "</li>";
  }
  document.getElementById("orders").innerHTML = orderlist;
}
function myfunction(){
  var order = prompt("What would you like to order?");
  orderlist += "<li>" + order + "</li>";
  document.getElementById("orders").innerHTML = orderlist;
}

function check(){
  var email1=document.getElementById('email1');
  var email2=document.getElementById('email2');
  if (email1.value != email2.value){
    alert("The two emails do not match");
    return false;
  }
}
function nicknameFunction(){
  if (document.getElementById('yesNick').checked){
    document.getElementById('nick').style.display="inline";
    document.getElementById('nickname').setAttribute('required', true);
  }
  else{
    document.getElementById('nick').style.display="none";
    document.getElementById('nickname').removeAttribute('required');
  }
}
