// Khai bao bien

// cu phap: var tenBien;

var x, y, z; // gia tri cua x, y, z = undefined
var a = 3;
var b = 5,
  c = 10;

var m = 3.1,
  n = "Hello, world!";

// alert(a);

// trong JS co mot so kieu du lieu co ban
// 1. Kieu so: 9, 3.14, 0x0102,...
// 2. Kieu chuoi ki tu: "Chuoi ki tu", new String("Chuoi ki tu");
// 3. Kieu mang: [3, "abc", 41, 3.5], new Array();
// 4. Kieu doi tuong: {}, new Object();
// =================================================================================================
// Kieu so

var x = 3,
  y = 5;

console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);

// Kieu chuoi ki tu
// Cach 1:

var chuoi1 = "Day la 1 chuoi ki tu so 1";
console.log("chuoi1 =", chuoi1);

// Cach 2:
var chuoi2 = new String("Day la chuoi ki tu so 2");
console.log("chuoi2 =", chuoi2);

// Thao tac voi chuoi ki tu
// 1. Ghep chuoi ki tu
var chuoi3 = chuoi1 + " ====== " + chuoi2;
console.log(chuoi3);

var chuoi4 = chuoi1 + " === " + 4000;
console.log(chuoi4);

// 2. Cac ham thao tac chuoi

var chuoiInHoa = chuoi1.toUpperCase();
console.log("chuoiInHoa = " + chuoiInHoa);

var chuoiInThuong = chuoi1.toLowerCase();
console.log("chuoiInThuong = " + chuoiInThuong);

var soKiTu = chuoi1.length;
console.log("soKiTu: = " + soKiTu);

for (var i = 0; i < chuoi1.length; i++) {
  // chuoi1.charAt(i);
  console.log("Ki tu thu " + i + " = " + chuoi1[i]);
}

var thayTheChuoi = chuoi1.replace("1", "10000");
console.log("thayTheChuoi: " + thayTheChuoi);

var msv = "PH 3 5 9 8"; // PH3598
var msvSauKhiReplace = msv.replaceAll(" ", "");
console.log("msvSauKhiReplace: " + msvSauKhiReplace);

// Kieu mang
var mang1 = [];
var mang2 = [3, "abc", 3.5];

var mang3 = new Array();

mang1.push("Chuoi them moi");
mang1.push(10000);
mang1.push(300);

var doDaiMang1 = mang1.length;

console.log("doDaiMang1: " + doDaiMang1);
console.log("mang1: " + mang1);

// duyet mang
for (var i = 0; i < mang1.length; i++) {
  console.log(mang1[i]);
}

var test = function () {
  console.log("TOI DANG O TRONG HAM");
};

function testHam(a, b, c) {
  a();
  console.log("c = " + c);
}

testHam(test, 3);

mang1.forEach(function (value, index) {
  console.log(value + " === " + index);
});

var tong = 0;

[1, 2, 3, 4].forEach(function (value) {
  tong = tong + value;
});

console.log("Tong = " + tong);
