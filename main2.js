let intervalId;
let image = document.getElementById("targetImage");
image.onclick = changeImage;
const text = document.getElementById("content");
let textindex = 0;
const pictureArray = [
  { src: "./images/music1.jpg", title: "music" },
  { src: "./images/ヨルシカ.jpg", title: "Kyoto" },
];
function changeImage() {
  if (image.style.opacity == "") {
    image.style.opacity = 1;
  }

  let opacityInt = image.style.opacity * 100;
  //フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
  let intervalId = setInterval(() => {
    opacityInt = opacityInt - 10;
    image.style.opacity = opacityInt / 100;

    if (image.style.opacity <= 0) {
      clearInterval(intervalId);
      //画像を交換
      console.log(image.src);
      if (textindex === 0) {
        image.src = "images/ヨルシカ.jpg";
        textindex = 1;
        text.textContent = "この前名古屋で開催されたライブに行ってきました！";
      } else {
        image.src = "images/music1.jpg";
        textindex = 0;
        text.textContent = "顔や年齢などの公表はされていないアーティストです！";
      }

      opacityInt = image.style.opacity * 100;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      intervalId = setInterval(() => {
        opacityInt = opacityInt + 10;
        image.style.opacity = opacityInt / 100;
        if (image.style.opacity >= 1) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  }, 100);
}
