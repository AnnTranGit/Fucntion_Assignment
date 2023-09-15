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