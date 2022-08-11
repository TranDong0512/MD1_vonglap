let number = +prompt("nhập số n")
var n1 =1 , n2 =1 , next_number;
var tong=0;
document.write("fibonacci")
for (let i=1; i<= number; i++) {
    // document.write("<br>" + n1)
    tong = tong + n1
    // if (n1 % 5 == 0) {
    //     document.write("số đầu tiên chia " + n1)
    // }
    next_number = n1 + n2;
    n1 = n2;
    n2 = next_number

}
document.write(tong)



// let number =+prompt("nhập số n")
// var n1 = 1, n2 = 1, next_number
// let i=1
// let tong= 0
// while (i <= number){
//     document.write("<br>" + n1)
//     // tong =tong + n1
//     next_number = n1 + n2
//     n1 = n2
//     n2 = next_number
//     i++
//
// }
// document.write(next_number)
