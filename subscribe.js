const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeMsg = document.getElementById("subscribeMsg");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function () {
    subscribeMsg.textContent = "Сіз Jetisu Live жаңалықтарына сәтті жазылдыңыз!";
    subscribeBtn.disabled = true;
    subscribeBtn.textContent = "Жазылды ✓";
  });
}
