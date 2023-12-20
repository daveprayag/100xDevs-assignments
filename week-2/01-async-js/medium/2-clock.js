function terminalClock() {
  const currentTime = new Date();
  let hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}
setInterval(() => {
  terminalClock();
}, 1000);
