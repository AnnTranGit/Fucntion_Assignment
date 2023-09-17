// Bài 1: 

function calcScore (score1, score2, score3,location, type )
{
    var averScore = 0;

    var locScore = 0;
    
    switch(location)  {
        case 'selRegion' : {
            locScore = 0;
        };break;
        case 'selA': {
            locScore = 2;
        };break;
        case 'selB': {
            locScore = 1;
        };break;
        case 'selC': {
            locScore = 0.5;
        }
    }

    var typeScore = 0;

    switch(type)  {
        case 'selObject' : {
            typeScore = 0;
        };break;
        case 'sel1': {
            typeScore = 2.5;
        };break;
        case 'sel2': {
            typeScore = 1.5;
        };break;
        case 'sel2': {
            typeScore = 1;
        }
    }

    averScore = (score1 + score2 + score3)/3 + locScore + typeScore;

    return averScore;

}



// Bài 2


function tinhTienDien(so_KW, tiensoKW_duoi50, tiensoKW_duoi100, tiensoKW_duoi200, tiensoKW_duoi350, tiensoKW_conlai){

    var outputTongTienDien = 0;
    var tongTienDien = 0;

    if (so_KW <= 50) {
        tongTienDien = so_KW * tiensoKW_duoi50;

    } else if( so_KW > 50 && so_KW <=100) {
        tongTienDien = 25000 + (so_KW-50) * tiensoKW_duoi100 ;

    } else if (so_KW >100 && so_KW <=200){
        tongTienDien = 57500 + (so_KW - 100) * tiensoKW_duoi200 ;  

    } else if (so_KW > 200 && so_KW <= 350) {
        tongTienDien = 142500 + (so_KW-200) * tiensoKW_duoi350 ;  

    }else {
        tongTienDien = 307500 + (so_KW-350) * tiensoKW_conlai;
    }

    outputTongTienDien = tongTienDien;
    return outputTongTienDien;
}

// Bài 3

function calcTax (annualIncome, dpNumber){

    taxIncome = annualIncome - 4e6 - (dpNumber * 1.6e6);
    var taxPay = 0;

    if (taxIncome <=60e6) {
        taxPay = taxIncome * 0.05;
    } else if (taxIncome > 60e6 && taxIncome <= 120e6) {
        taxPay = taxIncome * 0.1;
    } else if (taxIncome >120e6 && taxIncome <=210e6) {
        taxPay= taxIncome * 0.15;
    } else if (taxIncome > 210e6 && taxIncome <= 384e6) {
        taxPay = taxIncome * 0.2;
    } else if (taxIncome > 384e6 && taxIncome <= 624e6) {
        taxPay = taxIncome * 0.25;
    } else if (taxIncome >624e6 && taxIncome <= 960e6) {
        taxPay = taxIncome * 0.3;
    } else {
        taxPay = taxIncome * 0.35;
    }

    return taxPay;
}
