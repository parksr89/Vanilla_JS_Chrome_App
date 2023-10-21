const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();
  const date1 = new Date("December 25, 2023 :00:00");

  let leftDay = 85;
  const leftHours = String(23 - date.getHours()).padStart(2, 0);
  const leftMinutes = String(59 - date.getMinutes()).padStart(2, 0);
  const leftSeconds = String(59 - date.getSeconds()).padStart(2, 0);

  if (date.getMonth() === 9) {
    leftDay = 85 - date.getDate();
  } else if (date.getMonth() === 10) {
    leftDay = 54 - date.getDate();
  } else {
    leftDay = 24 - date.getDate();
  }

  clockTitle.innerText = ` ${leftDay} day, ${leftHours} h ${leftMinutes} m ${leftSeconds} s `;
}

getClock();
setInterval(getClock, 1000);
