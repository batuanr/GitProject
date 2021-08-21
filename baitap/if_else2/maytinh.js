function show(value) {
    document.getElementById("display").value+=value;
}
function calculator() {
    document.getElementById("display").value= eval(document.getElementById("display").value);
}
function ac() {
    document.getElementById("display").value="";
}