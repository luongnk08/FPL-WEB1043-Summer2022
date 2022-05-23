// Bai 1
function bai1() {
  do {
    let so1 = prompt("Moi ban nhap vao so thu 1:");
    let so2 = prompt("Moi ban nhap vao so thu 2:");

    if (isNaN(so1) || isNaN(so2)) {
      alert("So 1 hoac so 2 khong phai la so. Moi nhap lai");
    } else {
      if (so1 < 0 || so2 < 0) {
        alert("So 1 va so 2 phai la so duong");
      } else {
        so1 = Number(so1);
        so2 = Number(so2);

        let chuVi = (so1 + so2) * 2;
        let dienTich = so1 * so2;

        alert("Chu vi = " + chuVi + " | Dien tich = " + dienTich);
        return;
      }
    }
  } while (true);
}

// bai1();

function bai2() {
  do {
    let n = prompt("Moi ban nhap vao so n:");

    if (isNaN(n) || n <= 0) {
      alert("So n khong hop le. Moi ban nhap lai.");
    } else {
      n = Number(n);

      let tong = 0;

      for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
          tong += i; // tong = tong + i;
        }
      }

      alert("Tong cua cac so chan tu 0 -> n la: " + tong);
      return;
    }
  } while (true);
}

// bai2();

let soGiayHienTai = 0;
let invervalId;

function start() {
  if (invervalId === undefined) {
    invervalId = setInterval(function () {
      soGiayHienTai++;

      let spanElement = document.getElementById("demSpan");
      spanElement.innerText = soGiayHienTai;
    }, 1000);
  }
}

function pause() {
  clearInterval(invervalId);
  invervalId = undefined;
}

// bai 4
function myEvent() {
  do {
    let n = prompt("Moi ban nhap vao so n:");

    if (isNaN(n) || n < 0) {
      alert("So n khong hop le. Moi ban nhap lai.");
    } else {
      n = Number(n);

      let tich = 1;

      for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
          tich *= i; // tich = tich * i;
        }
      }

      alert("Gia tri cua S = " + tich);
      return;
    }
  } while (true);
}
