function cong() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let ketqua;
    ketqua=num1+num2;
    document.getElementById("ketqua").innerText=ketqua;
}
function tru() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let ketqua;
    ketqua=num1-num2;
    document.getElementById("ketqua").innerText=ketqua;
}
function nhan() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let ketqua;
    ketqua=num1*num2;
    document.getElementById("ketqua").innerText=ketqua;
}
function chia() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let ketqua;
    ketqua=num1/num2;
    document.getElementById("ketqua").innerText=ketqua;
}