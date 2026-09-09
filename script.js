const wedding = {
  couple: "Shoaib & Muskan",
  nikahDate: "2027-01-12T12:30:00"
};

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("curtain").classList.add("open");
    setTimeout(() => {
      document.getElementById("curtain").classList.add("hide");
    }, 2200);
  }, 900);
});

function updateCountdown() {
  const target = new Date(wedding.nikahDate).getTime();
  const diff = Math.max(0, target - Date.now());

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

function submitRSVP(e) {
  e.preventDefault();

  const name = document.getElementById("guestName").value;
  const status = document.getElementById("attendance").value;

  document.getElementById("rsvpMsg").textContent =
    `Thank you, ${name}. Your response has been recorded as "${status}".`;
}
