function register() {
  let inputTexts = document.getElementsByClassName("inputText");

  // kiểm tra tất cả các field phải nhập vào
  for (let i = 0; i < inputTexts.length; i++) {
    let inputItem = inputTexts.item(i);

    // reset lại giá trị của error message về mặc định
    // do errorMessage nằm dưới inputText nên có thể lấy ra bằng nextElementSibling
    inputItem.nextElementSibling.innerText = "";
    inputItem.nextElementSibling.style.color = "red";
    inputItem.nextElementSibling.style.fontSize = "10px";

    // Kiểm tra nếu value trống
    if (inputItem.value === "") {
      inputItem.nextElementSibling.innerText = "* Bắt buộc";
    } else {
      // Kiểm tra nếu là email thì phải hợp lệ
      if (
        inputItem.getAttribute("type") === "email" &&
        isValidEmail(inputItem.value) === false
      ) {
        inputItem.nextElementSibling.innerText = "* Email không hợp lệ";
      }

      // kiểm tra nếu có điều kiện phải là số
      if (
        inputItem.getAttribute("type") === "number" &&
        isNaN(inputItem.value) === true
      ) {
        inputItem.nextElementSibling.innerText = "* Phải nhập vào kiểu số";
      }
    }
  }
}

function onChangeKhoaHoc() {
  let khoaHocElement = document.getElementById("khoaHoc");
  let hocPhiElement = document.getElementById("hocPhi");
  hocPhiElement.value = khoaHocElement.value;
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
