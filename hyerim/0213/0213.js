function showResult() {
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;

  if (id === "DIGI4" && password === "DIGI4") {
    document.body.innerHTML = "";
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    startSnowing(canvas);
  } else {
    const message = document.createElement("h2");
    message.innerHTML = "잘못된 접근입니다, 다시 시도하세요!";
    message.style.color = "red";
    message.style.fontWeight = "bold";
    document.body.appendChild(message);
  }
}

function startSnowing(canvas) {
  const context = canvas.getContext("2d");
  const snowflakes = [];
  for (let i = 0; i < 300; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 5 + 1,
      angle: Math.random() * 360,
    });
  }
  setInterval(() => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    for (const snowflake of snowflakes) {
      context.save();
      context.translate(snowflake.x, snowflake.y);
      context.rotate((snowflake.angle * Math.PI) / 180);
      context.fillRect(
        -snowflake.size / 2,
        -snowflake.size / 2,
        snowflake.size,
        snowflake.size
      );
      context.restore();
      snowflake.x +=
        snowflake.speed * Math.cos((snowflake.angle * Math.PI) / 180);
      snowflake.y +=
        snowflake.speed * Math.sin((snowflake.angle * Math.PI) / 180);
      if (snowflake.y > canvas.height) {
        snowflake.y = 0;
      }
      if (snowflake.x > canvas.width) {
        snowflake.x = 0;
      }
    }
  }, 30);
}
