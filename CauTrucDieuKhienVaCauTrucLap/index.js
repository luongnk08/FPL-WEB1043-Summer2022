// Cau lenh dieu kien: IF

// var n = prompt("Moi ban nhap vao 1 so");

// neu n la so chan
// if (n % 2 == 0) {
//   alert("So ban vua nhap vao la so chan");
// } else {
//   alert("So ban vua nhap vao KHONG la so chan");
// }

// DEMO CHUONG TRINH DOAN SO
// ELSE IF
// var soDung = 5;
// if (n < soDung) {
//   alert("So ban vua nhap nho hon so dung");
// } else if (n > soDung) {
//   alert("So ban vua nhap lon hon so dung");
// } else {
//   alert("CHUC MUNG! BAN DA DOAN CHINH XAC!");
// }

// if (n < soDung) {
//   alert("So ban vua nhap nho hon so dung");
// }

// if (n > soDung) {
//   alert("So ban vua nhap lon hon so dung");
// }

// if (n == soDung) {
//   alert("CHUC MUNG! BAN DA DOAN CHINH XAC!");
// }

// CAU TRUC SWICH

// var n = prompt("Moi ban nhap vao so diem");
var n = 3;

// switch (n) {
//   case "1":
//     console.log("Ban vua nhap vao so 1");
//     break;
//   case "2":
//     console.log("Ban vua nhap vao so 2");
//     break;
//   default:
//     console.log("Ban dang khong nhap vao so 1 hoac so 2");
//     break;
// }

// switch (n) {
//   case "0":
//     console.log("0");
//   case "10":
//     console.log("10");
//   case "1":
//     console.log("1");
//   case "2":
//     console.log("2");
//   case "3":
//     console.log("3");
//   case "4":
//     alert("Ban duoc xep loai YEU");
//     break;
//   case "5":
//   case "6":
//   case "7":
//     alert("Ban duoc xep loai TB");
//     break;
//   case "8":
//   case "9":
//   case "10":
//     alert("Ban duoc xep loai GIOI");
//     break;
//   default:
//     alert("DIEM BAN NHAP VAO KHONG HOP LE");
//     break;
// }

// VONG LAP

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var n1 = 10;

// khi nao bieu thuc dieu kien con dung, thi se tiep tuc lap
// while (n1 > 0) {
//   console.log("n1 = ", n1);
//   n1--;
// }

do {
  console.log("do while n1 = ", n1);
} while (n1 > 100);

// ham confirm

// var kqConfirm = confirm("Ban co muon xoa bai viet nay khong?");

// if (kqConfirm == false) {
//   alert("Ban khong muon xoa bai viet");
// } else {
//   alert("Bai viet da bi xoa");
// }

// BIEN TOAN CUC VA BIEN CUC BO
// let va const

var bienToanCuc = "Toi la bien toan cuc";

function hamThu1() {
  var bienCucBo = "Toi la bien cuc bo";

  console.log("bienToanCuc o trong hamThu1: " + bienToanCuc);
  console.log("bienCucBo o trong hamThu1: " + bienCucBo);

  var i = 5;

  while (i-- > 0) {
    var bienCucBoTrongWhile = "Toi la bien cuc bo trong while";
    console.log(bienCucBoTrongWhile);
  }

  console.log(bienCucBoTrongWhile);
}

hamThu1();

// console.log("bienCucBo o ben ngoai: " + bienCucBo);

// const
const vdConstant = 3;

// let
let vdLet = "Toi la bien let";
console.log("vdLet: " + vdLet);

// Math
console.log(Math.round(2.3));
console.log(Math.round(2.5));
console.log(Math.round(2.7));

console.log(Math.floor(3.9));
console.log(Math.floor(3.1));

console.log(Math.ceil(3.9));
console.log(Math.ceil(3.1));

// Random

var random1 = Math.random();
console.log(random1);

// random tu 5 den 10
let random5_10 = Math.round(Math.random()) * (10 - 5) + 5;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let index = 10;

// while (index-- > 0) {
//   console.log("so ran dom:" + getRandomInt(5, 10));
// }

alert(getRandomInt(10, 100));
