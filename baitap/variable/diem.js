function tt() {
    let a = document.getElementById("dien").value;
    let b = document.getElementById("dien2").value;
    let c = document.getElementById("dien3").value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    document.getElementById("ketqua").innerText="kết quả là:"+" " +((a+b+c)/3) +" " + "điểm";
}
function doi() {
    let d;
    let g;

    d = document.getElementById("doc").value;
    d = parseFloat(d);
    g =(9*d)/5 + 32;
    document.getElementById("dof").innerText=g+ "°F";


}
function chuvi() {
    const pi = 3.14;
    let duongkinh = document.getElementById("duongkinh").value;
    duongkinh= parseFloat(duongkinh);
    document.getElementById("chuvi").innerText="kết quả là:"+pi*duongkinh;
}
