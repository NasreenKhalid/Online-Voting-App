const textYes = document.querySelector(".text-yes");
const textNo = document.querySelector(".text-no");
const textMaybe = document.querySelector(".text-maybe");

var clicks = 0,
  clicksNo = 0,
  clicksMaybe = 0;

function initiateClicks() {
  var clicksStr = localStorage.getItem("clicks");
  var clicksNoStr = localStorage.getItem("clicksNo");
  var clicksStrMaybe = localStorage.getItem("clicksMaybe");

  if (
    clicksStr === undefined ||
    clicksNoStr === undefined ||
    clicksStrMaybe === undefined
  ) {
    localStorage.setItem("clicksMaybe", 0);
    localStorage.setItem("clicks", 0);
    localStorage.setItem("clicksNo", 0);
  } else {
    clicks = parseInt(clicksStr);
    clicksNo = parseInt(clicksNoStr);
    clicksMaybe = parseInt(clicksStrMaybe);
  }
  textYes.innerHTML = `Votes: ${clicks}`;
  textNo.innerHTML = `Votes: ${clicksNo}`;
  textMaybe.innerHTML = `Votes: ${clicksMaybe}`;
}

function doClick(e) {
  if (e.target.id === "yes") {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
  } else if (e.target.id === "no") {
    clicksNo += 1;
    localStorage.setItem("clicksNo", clicksNo);
  } else {
    clicksMaybe += 1;
    localStorage.setItem("clicksMaybe", clicksMaybe);
  }

  textYes.innerHTML = `Votes: ${clicks}`;
  textNo.innerHTML = `Votes: ${clicksNo}`;
  textMaybe.innerHTML = `Votes: ${clicksMaybe}`;
}

document.getElementById("yes").onclick = doClick;
initiateClicks();

document.getElementById("no").onclick = doClick;
initiateClicks();

document.getElementById("maybe").onclick = doClick;
initiateClicks();
