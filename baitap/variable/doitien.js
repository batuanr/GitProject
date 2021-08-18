
function tien() {
    let tien1 = document.getElementById("tien1").value;
    let tien2 = document.getElementById("tien2").value;
    let nhap = document.getElementById("nhaptien").value;
     nhap=parseFloat(nhap);
     if (tien1=="vnd"&&tien2=="usd"){
         document.getElementById("tien").innerText=nhap*0.00004348;

     }
     if (tien1=="vnd"&&tien2=="jpy"){
         document.getElementById("tien").innerText=nhap*0.005;
     }
     if (tien1=="vnd"&&tien2=="vnd"){
         document.getElementById("tien").innerText=nhap;
     }
     if (tien1=="usd"&&tien2=="usd"){
         document.getElementById("tien").innerText=nhap;
     }
     if (tien1=="usd"&&tien2=="jpy"){
         document.getElementById("tien").innerText=nhap*100;
     }
     if (tien1=="usd"&&tien2=="vnd"){
         document.getElementById("tien").innerText=nhap*23000;
     }
     if (tien1=="jpy"&&tien2=="jpy"){
         document.getElementById("tien").innerText=nhap;
     }
     if (tien1=="jpy"&&tien2=="usd"){
         document.getElementById("tien").innerText=nhap*0.01;
     }
     if (tien1=="jpy"&&tien2=="vnd"){
         document.getElementById("tien").innerText=nhap*200;
     }


}