const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function drawStar(x, y, radius, color) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function drawNebula(x, y, radius, color) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "rgba(0,0,0,0)");

  ctx.save();
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.restore();
}

function drawSky() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 1000; i++) {
    const x = random(0, canvas.width);
    const y = random(0, canvas.height);
    const radius = random(0.1, 1.1);
    const color = "white";
    drawStar(x, y, radius, color);
  }

  const nebulaCount = Math.floor(random(1, 10));
  for (let i = 0; i < nebulaCount; i++) {
    const x = random(0, canvas.width);
    const y = random(0, canvas.height);
    const radius = random(100, 300);
    const color = `rgba(${Math.floor(random(0, 255))}, ${Math.floor(
      random(0, 255)
    )}, ${Math.floor(random(0, 255))}, 0.2)`;
    drawNebula(x, y, radius, color);
  }
}

drawSky();
