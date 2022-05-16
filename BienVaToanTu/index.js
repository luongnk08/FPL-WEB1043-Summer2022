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

var mang3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mang3.pop();

console.log("mang3 = " + mang3);

// Bai tap
// in ra cac phan tu chia het cho 3 trong mang

for (var i = 0; i < mang3.length; i++) {
  // kiem tra phan tu thu i co chia het cho 3 khong
  if (mang3[i] % 3 === "0") {
    console.log("So chia het cho 3: " + mang3[i]);
  }
}

// Kiem tra kieu du lieu trong JS
// dung tu khoa: typeof

var kieu1 = "four";
var kieu2 = 3;
var kieu3 = "10000";

console.log("kieu1 = " + typeof kieu1);
console.log("kieu2 = " + typeof kieu2);

// ham isNaN: kiem tra mot bien co phai la so hay khong
// gia tri: NaN (Not a number)

if (isNaN(kieu3)) {
  console.log("kieu3 khong phai la 1 so");
} else {
  console.log("kieu3 la 1 so");
}

console.log("gia tri isNaN(kieu1) = " + isNaN(kieu1));

// Ham trong JS

function tinhTong() {
  // viet code cho ham tai day
  console.log("toi la ham tinhTong");
}

tinhTong();

// ham co tham so
function tinhTong1(a, b, c) {
  console.log("Gia tri: ", a, b, c);
  return a + b + c;
}

var kq1 = tinhTong1(1, 2, 3);
console.log("kq1 = " + kq1);
console.log("tinhTong = " + tinhTong());

var kq2 = tinhTong1(1, 2, 3, 4);
var kq3 = tinhTong1(1, 2);
console.log("kq2 = " + kq2);
console.log("kq3 = " + kq3);

var kq4 = tinhTong1("abc", "xyz", "mnq");
var kq5 = tinhTong1("abc");
console.log("kq5 = " + kq5);

// Object trong JS
// cach 1: {}
// cach 2: new Object();

var obj1 = {
  // khai bao thuoc tinh
  thuocTinh1: 10,
  thuocTinh2: 3,
  thuocTinh3: "ABC",

  // khai bao phuong thuc
  phuongThuc1: function () {
    console.log("Phuong thuc 1");
  },
  phuongThuc2: function () {
    return this.thuocTinh1 + this.thuocTinh2;
  },
};

obj1.phuongThuc1();
console.log(obj1.phuongThuc2());

// them thuoc tinh va phuong thuc cho obj1
obj1.thuocTinhMoiThem = "10000";
obj1.phuongThucMoiThem = function () {
  console.log("Phuong thuc moi them");
};

console.log("obj1 = ", obj1);

var obj2 = new Object(); // = {}
obj2.thuocTinh = 100;
obj2.phuongThuc = function () {
  console.log("Phuong thuc");
};

// Cach nhap du lieu:
// Ham prompt

var ketQuaPrompt = prompt("Moi ban nhap vao 1 so");

if (isNaN(ketQuaPrompt)) {
  console.log(ketQuaPrompt + " khong phai la so");
} else {
  console.log(ketQuaPrompt + " la so");

  // ep kieu
  var sauKhiEpKieu = Number(ketQuaPrompt);
  console.log("sauKhiEpKieu: " + typeof sauKhiEpKieu);
}

// ham alert: hien thi thong bao ra man hinh
alert(ketQuaPrompt);

// BAI TAP
// nhap vao 1 so N, voi dieu kien: N > 1 va N <= 20 (neu khong dung thi thong bao ra man hinh)
// Neu dung, thi tinh tong cua: 1 + 2 + ... + N - 1 + N
// sau do thong bao ket qua ra man hinh

var N = prompt("Moi ban nhap vao 1 so:");

if (isNaN(N)) {
  alert(N + " khong plai la 1 so!");
} else {
  N = Number(N);

  if (N > 1 && N <= 20) {
    var tong = 0;

    for (var i = 1; i <= N; i++) {
      tong = tong + i;
    }

    alert("Tong tu 1 den N = " + tong);
  } else {
    alert("N phai thoa man: N > 1 va N <= 20");
  }
}

// =================================================================
// 1. Toan tu 1 ngoi
// bao gom: +, -, ++, --

var n = 3;
console.log(-n);

n++; // (n = n + 1);
++n;

n = 5;

var n1 = n++;
var n2 = ++n;

console.log("n1, n2:", n1, n2);

n--; // (n = n - 1);
--n;

// 2. Toan tu 2 ngoi
// bao gom: &, |, +, -, *, /, %, &&, ||

n = n + 1; // n += 1;
n = n - 1; // n -= 1;
n = n * 1; // n *= 1
n = n / 1; // devide: chia lay phan nguyen, n /= 1;
n = n % 1; // module: chia lay phan du, n %= 1;

// phep va: &, hoac: |

var phep1 = true & false;
var phep2 = true && false;

var phep3 = n - 3 == 0 && n % 3 == 0;
var phep4 = (n - 3 == 0) & (n % 3 == 0);

var phep3 = n - 3 == 0 || n % 3 == 0; // chi tinh toan ve ben phai neu ve ben trai = false
var phep4 = (n - 3 == 0) | (n % 3 == 0); // luon luon tinh toan ca 2 ben
