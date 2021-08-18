function a(){
alert("Chào lần 2");
}
var q = document.getElementById("2");
q.addEventListener("change",ol);
function ol() {
   var c = document.getElementById("2").value;
    alert(c)
}
var e = document.getElementById("1");
e.addEventListener("mouseover",oo);
e.addEventListener("mouseout",kk);
function oo() {
    document.getElementById("1").style.color="red";
}
function kk() {
    document.getElementById("1").style.color="blue";
}
function gg() {
    b=prompt("Bạn muốn gì");
    document.getElementById("3").innerText=b;
}
var f = document.getElementById("4");
f.addEventListener("mouseover",ll);
f.addEventListener("mouseout",hh);
function ll() {
    document.getElementById("4").style.background="gray";
}
function hh() {
    document.getElementById("4").style.color="orange";
}
function cl1() {
    document.getElementById("5").src="oto1.jpg";
}