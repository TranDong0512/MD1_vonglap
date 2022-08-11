let nhietdo;
for(;;){
    nhietdo = +prompt("nhập nhiệt độ phòng")
    if( nhietdo <20 ){
        alert("nhiệt độ quá thấp cần tăng nhiệt độ")
    }
    if ( nhietdo > 100){
        alert("nhiệt độ quá cao cần giảm nhiệt độ")
    }
    if (nhietdo => 20 && nhietdo <= 100){
        alert(" nhiệt độ trong khoảng an toàn")
        break
    }
}
