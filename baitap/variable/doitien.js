
function tien() {
    let tien1 = document.getElementById("tien1").value;
    let tien2 = document.getElementById("tien2").value;
    let nhap = document.getElementById("nhaptien").value;
     nhap=parseFloat(nhap);
    tien1=parseInt(tien1);
    tien2=parseInt(tien2);
    let result;
    result=nhap*tien1/tien2;
    document.getElementById("tien").innerText=result;

}