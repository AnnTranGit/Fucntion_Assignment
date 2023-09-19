//bài 1


document.getElementById('btnScore').onclick = function (){

    var benchMark = +document.getElementById('benchMark').value;
    var subScore1 = +document.getElementById('subScore1').value;
    var subScore2 = +document.getElementById('subScore2').value;
    var subScore3 = +document.getElementById('subScore3').value;
    var region1    = +document.getElementById('region').value;
    var selType1    = +document.getElementById('selType').value;

    var avScore = 0;


    avScore = calcScore (subScore1, subScore2, subScore3 , region1, selType1 );

    var stringHTML = '';


    if (subScore1 === 0 || subScore2 === 0 || subScore3 === 0) {
        stringHTML = "Bạn đã rớt. Do có điểm 0"
    } else if (avScore < benchMark && subScore2 > 0 && subScore3 > 0 && subScore1 > 0) {
        stringHTML  = "Bạn đã rớt. " + "Tổng điểm là " +  avScore;
    } else {
        stringHTML = "Bạn đã đậu." + "Tổng điểm là " +  avScore;
    }
    document.getElementById('examResult').innerHTML = stringHTML;
}



//bài 2

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

    document.getElementById('tinhTienDien').innerHTML = "Họ tên: " + hoTen + " ; " + "Tổng tiền điện: " + new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tongTien);
}


//Bài 3

 var taxPay = 0;

 document.getElementById('taxbtn').onclick = function () {
    var fullName = document.getElementById('fullName').value;
    var annualTotal = +document.getElementById('annualTotal').value;
    var dpNumber = +document.getElementById ('dpNumber').value;

    taxPay = calcTax (annualTotal, dpNumber)

    document.getElementById('tax-Pay').innerHTML = "Họ tên:" + fullName + " ---- " + "Thuế phải trả:" + new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(taxPay);

}

// //Bài 4

function disableInput() {
    var e = document.getElementById("selCustomer").value;
    document.getElementById("connectNo").style.display = "company" == e ? "block" : "none"
}