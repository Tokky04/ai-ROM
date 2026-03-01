const video = document.getElementById("video");
const msg = document.getElementById("msg");
const btn = document.getElementById("start");

function log(s){
  msg.textContent += s + "\n";
}

btn.addEventListener("click", async () => {
  msg.textContent = "";
  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      log("このブラウザは getUserMedia に対応していません。");
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false
    });

    video.srcObject = stream;
    log("カメラ起動OK");
  } catch (e) {
    log("カメラ起動失敗: " + e.name);
    log(String(e));
    log("対策: httpsで開いているか / カメラ許可がONか確認");
  }
});