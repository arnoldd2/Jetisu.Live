console.log("subscribe.js loaded");

const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeMsg = document.getElementById("subscribeMsg");

if (subscribeBtn && subscribeMsg) {
  subscribeBtn.addEventListener("click", () => {
    subscribeMsg.textContent = "Сіз Jetisu Live жаңалықтарына сәтті жазылдыңыз!";
    subscribeBtn.textContent = "Жазылды ✓";
    subscribeBtn.disabled = true;
  });
} else {
  console.log("subscribe elements not found");
}
