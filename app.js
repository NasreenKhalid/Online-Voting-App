const textYes = document.querySelector(".text-yes");
const textNo = document.querySelector(".text-no");
const textMaybe = document.querySelector(".text-maybe");

var clicks = 0;
var clicksNo = 0;
var clicksMaybe = 0;

function initiateClicks() {
  var clickStr = localStorage.getItem("clicks");
  if (clickStr == undefined) {
    localStorage.setItem("clicks", 0);
    clicks = 0;
  } else {
    clicks = parseInt(clickStr);
  }
  textYes.innerHTML = `Votes: ${clicks}`;
}

function doClick() {
  clicks += 1;
  localStorage.setItem("clicks", clicks);
  textYes.innerHTML = `Votes: ${clicks}`;
}

function initiateClicksNo() {
  var clickStrNo = localStorage.getItem("clicksNo");
  if (clickStrNo == undefined) {
    localStorage.setItem("clicksNo", 0);
    clicksNo = 0;
  } else {
    clicksNo = parseInt(clickStrNo);
  }
  textNo.innerHTML = `Votes: ${clicksNo}`;
}

function doClickNo() {
  clicksNo += 1;
  localStorage.setItem("clicksNo", clicksNo);
  textNo.innerHTML = `Votes: ${clicksNo}`;
}

function initiateClicksMaybe() {
  var clickStrMaybe = localStorage.getItem("clicksMaybe");
  if (clickStrMaybe == undefined) {
    localStorage.setItem("clicksMaybe", 0);
    clicksMaybe = 0;
  } else {
    clicksMaybe = parseInt(clickStrMaybe);
  }
  textMaybe.innerHTML = `Votes: ${clicksMaybe}`;
}

function doClickMaybe() {
  clicksMaybe += 1;
  localStorage.setItem("clicksMaybe", clicksMaybe);
  textMaybe.innerHTML = `Votes: ${clicksMaybe}`;
}

document.getElementById("yes").onclick = doClick;
initiateClicks();

document.getElementById("no").onclick = doClickNo;
initiateClicksNo();

document.getElementById("maybe").onclick = doClickMaybe;
initiateClicksMaybe();
