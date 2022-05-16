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

var n = prompt("Moi ban nhap vao so diem");

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

switch (n) {
  case "0":
    console.log("0");
  case "10":
    console.log("10");
  case "1":
    console.log("1");
  case "2":
    console.log("2");
  case "3":
    console.log("3");
  case "4":
    alert("Ban duoc xep loai YEU");
    break;
  case "5":
  case "6":
  case "7":
    alert("Ban duoc xep loai TB");
    break;
  case "8":
  case "9":
  case "10":
    alert("Ban duoc xep loai GIOI");
    break;
  default:
    alert("DIEM BAN NHAP VAO KHONG HOP LE");
    break;
}

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
