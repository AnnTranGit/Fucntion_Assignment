// document.getElementById('frmTinhLuong').onsubmit = function(event){
//     event.preventDefault(); //chan reload trang
//     tinhLuong();
// }

var tiensoKW_duoi50 = 500;
var tiensoKW_duoi100 = 650;
var tiensoKW_duoi200 = 850;
var tiensoKW_duoi350 = 1100;
var tiensoKW_conlai = 1300;

var tongTien = 0;

document.getElementById('btnTinhTien').onclick = function(event) {
    event.preventDefault();
    var hoTen = document.getElementById('hoTen').value;
    var soKW = +document.getElementById('soKW').value;


    tongTien = tinhTienDien(soKW, tiensoKW_duoi50, tiensoKW_duoi100, tiensoKW_duoi200, tiensoKW_duoi350, tiensoKW_conlai);

    document.getElementById('tinhTienDien').innerHTML = "Họ tên: " + hoTen + " ; " + "Tổng tiền điện: " + tongTien;
}
