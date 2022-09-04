//bai 1
document.getElementById("btn-ket-qua").addEventListener("click", function() {

    var diem1 = document.getElementById("txt-mon-1").value * 1; 
    var diem2 = document.getElementById("txt-mon-2").value *1;
    var diem3 = document.getElementById("txt-mon-3").value *1;

    var khuVuc = document.getElementById("txt-khu-vuc").value; 

    var doiTuong = document.getElementById("txt-doi-tuong").value;

    var diemKhuVuc = null;

    var diemDoiTuong = null;

    if (khuVuc == "khu-vuc-a") {
        diemKhuVuc = 2;
    } else if (khuVuc == "khu-vuc-b") {
        diemKhuVuc = 1;
    } else if (khuVuc == "khu-vuc-c") {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0
    };

    if (doiTuong == "doi-tuong-1") {
        diemDoiTuong = 2.5;
    } else if (doiTuong == "doi-tuong-2") {
        diemDoiTuong = 1.5;
    } else if (doiTuong == "doi-tuong-3") {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    };

    var diemTong = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong; 

    var diemChuan = document.getElementById("txt-diem-chuan").value * 1;
    
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        document.getElementById("ket-qua").innerHTML = `<div>Bạn đã rớt. Do có môn bị điểm 0</div>`;
    } else if (diemTong >= diemChuan) {
        document.getElementById("ket-qua").innerHTML = `<div>Bạn đã đậu. Tổng điểm: ${diemTong}</div>`
    } else {
        document.getElementById("ket-qua").innerHTML = `<div>Bạn đã rớt. Tổng điểm: ${diemTong}</div>`
    };
})


//bai 2

document.getElementById("tinh-tien-dien").addEventListener("click", function () {

    var name = document.getElementById("ho-va-ten").value;
    var soKw = document.getElementById("so-kw").value * 1; 
    var tienDien = null; 

    var tien50KwDau = 500;
    var tien50KwKe = 650; 
    var tien100KwKe = 850;
    var tien150KwKe = 1100;
    var tienConLai = 1300; 
 
    if (soKw <= 50) {
        tienDien = soKw * tien50KwDau; 
    } else if (soKw <= 100) {
        tienDien = 50 * tien50KwDau + tien50KwKe * (soKw - 50);
    } else if (soKw <= 200) {
        tiendien = 50 * tien50KwDau + 50 * tien50KwKe * (soKw - 100)
    } else if (soKw <= 350) {
        tienDien = 50 * tien50KwDau + 50 * tien50KwKe + 100 * tien100KwKe + tien150KwKe * (soKw - 200)
    } else {
        tienDien = 50 * tien50KwDau + 50 * tien50KwKe + 100 * tien100KwKe + tien150KwKe * 150 + tienConLai * (soKw - 350)
    };
    
    document.getElementById("tien-dien").innerHTML = `<div>Họ tên: ${name}; Tiền điện: ${new Intl.NumberFormat('vn-VN').format(tienDien)} VNĐ</div>`
})