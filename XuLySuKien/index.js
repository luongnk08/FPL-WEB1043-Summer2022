function onClickMe() {
  alert("Hello!");
}

document.write("WEB1043 <br>");
document.write(
  "<button type='button' onclick='onClickMe();'>Click me after write</button>"
);

// setTimeout

// setTimeout("onClickMe();", 2000);

// let idInterval = setInterval("onClickMe();", 2000);

// setTimeout("clearInterval(idInterval)", 5000);

let idInterval;

function start() {
  let soHienTai = 0;
  idInterval = setInterval(function () {
    console.log("<br>soHienTai: " + soHienTai);
    soHienTai++;
  }, 1000);
}

function pause() {
  clearInterval(idInterval);
}
