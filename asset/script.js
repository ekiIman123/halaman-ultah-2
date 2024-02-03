let isFirstToggle = true;
function toggleAudio() {
  const audio = document.querySelector(".music");
  const stopImage = document.querySelector(".stop");
  const speaker = document.querySelector(".speaker");
  const desc = document.querySelector(".desc");
  const content = document.querySelector(".content-speaker");
  const q1 = document.querySelector(".q1");
  const q2 = document.querySelector(".q2");

  if (isFirstToggle) {
    q1.style.display = "flex";
    q2.style.display = "none";
    isFirstToggle = false;
  }

  speaker.style.position = "absolute";
  speaker.style.top = "5%";
  speaker.style.left = "5%";
  speaker.style.height = "80px";
  speaker.style.width = "80px";
  speaker.style.zIndex = "10";

  content.style.height = "100%";

  desc.style.display = "none";

  if (audio.paused) {
    audio.play();
    stopImage.classList.add("dNone");
  } else {
    audio.pause();
    stopImage.classList.remove("dNone");
  }
}

function moveNo1() {
  const noElement = document.querySelector(".no");
  const maxX = window.innerWidth - noElement.clientWidth;
  const maxY = window.innerHeight - noElement.clientHeight;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  noElement.style.position = "fixed";
  noElement.style.left = randomX + "px";
  noElement.style.top = randomY + "px";
}

function moveNo2() {
  const laterElement = document.querySelector(".later");
  const maxX = window.innerWidth - laterElement.clientWidth;
  const maxY = window.innerHeight - laterElement.clientHeight;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  laterElement.style.position = "fixed";
  laterElement.style.left = randomX + "px";
  laterElement.style.top = randomY + "px";
}

function yes1() {
  const q1 = document.querySelector(".q1");
  const q2 = document.querySelector(".q2");

  q1.style.display = "none";
  q2.style.display = "flex";
}

function yes2() {
  const q1 = document.querySelector(".q1");
  const q2 = document.querySelector(".q2");
  const q3 = document.querySelector(".q3");

  q1.style.display = "none";
  q2.style.display = "none";
  q3.style.display = "flex";
}
