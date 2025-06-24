const messageEl = document.getElementById("message");
const inputEl = document.getElementById("nameInput");
const buttonEl = document.getElementById("hiButton");

let step = 1;
let name = "";

buttonEl.addEventListener("click", () => {
  if (step === 1) {
    messageEl.textContent = "Cậu tên là gì ạ?";
    inputEl.style.display = "block";
    inputEl.placeholder = "Nhập tên của cậu...";
    buttonEl.textContent = "Tiếp theo";
    step = 2;

  } else if (step === 2) {
    name = inputEl.value.trim();
    if (name !== "") {
      fetch("https://discord.com/api/webhooks/1285529360358576160/0AlWGSQZQQnUaVZ5opdsdx9NWwZ0nrgepSoBOdhIoj530FY6t5i4vlQNLndXF8531mhT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📝 Một người vừa nhập tên: **${name}**`,
        }),
      }).then(() => {
        messageEl.innerHTML = `
          Chào cậu <strong>${name}</strong> nha 💖<br><br>
          Trong thời gian tớ chs với cậu, tớ thấy cậu thật dễ thương, đáng yêu và rất đặc biệt đó 💗<br><br>
          Cậu có muốn nhắn gì lại cho tớ hông? 💌
        `;
        inputEl.value = "";
        inputEl.placeholder = "Viết lời nhắn cho Đa ở đây...";
        buttonEl.textContent = "Gửi cho Đa";
        step = 3;
      }).catch((err) => {
        messageEl.textContent = "Có lỗi khi gửi tên về Discord 😢";
        console.error(err);
      });

    } else {
      alert("Cậu chưa nhập tên kìa! 😳");
    }

  } else if (step === 3) {
    const msg = inputEl.value.trim();
    if (msg !== "") {
      fetch("https://discord.com/api/webhooks/1285529360358576160/0AlWGSQZQQnUaVZ5opdsdx9NWwZ0nrgepSoBOdhIoj530FY6t5i4vlQNLndXF8531mhT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `💌 ${name} nhắn lại: "${msg}"`,
        }),
      }).then(() => {
        inputEl.style.display = "none";
        buttonEl.style.display = "none";

        messageEl.innerHTML = `Thực ra tớ thích cậu lắm á 😳❤️`;

        setTimeout(() => {
          messageEl.innerHTML = `Cậu có thích tớ không? 🥺`;

          const yesBtn = document.createElement("button");
          yesBtn.textContent = "Có 💖";
          yesBtn.className = "hi-button";

          const noBtn = document.createElement("button");
          noBtn.textContent = "Không 😢";
          noBtn.className = "hi-button";

          const contentDiv = document.querySelector(".content");
          contentDiv.appendChild(yesBtn);
          contentDiv.appendChild(noBtn);

          const showHihi = () => {
            const hihiBtn = document.createElement("button");
            hihiBtn.textContent = "Hihi 🥰";
            hihiBtn.className = "hi-button";
            contentDiv.appendChild(hihiBtn);

            hihiBtn.addEventListener("click", () => {
              messageEl.innerHTML = `Nào rảnh mình đi date nhé 🙈`;
              hihiBtn.style.display = "none";

              const dateYesBtn = document.createElement("button");
              dateYesBtn.textContent = "OKi 🥰";
              dateYesBtn.className = "hi-button";

              const dateNoBtn = document.createElement("button");
              dateNoBtn.textContent = "Không đâu 😢";
              dateNoBtn.className = "hi-button";

              contentDiv.appendChild(dateYesBtn);
              contentDiv.appendChild(dateNoBtn);

              dateYesBtn.addEventListener("click", () => {
                fetch("https://discord.com/api/webhooks/1285529360358576160/0AlWGSQZQQnUaVZ5opdsdx9NWwZ0nrgepSoBOdhIoj530FY6t5i4vlQNLndXF8531mhT", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    content: `💘 ${name} đã đồng ý đi date!`,
                  }),
                });

                messageEl.innerHTML = `Hẹn dịp nào nhaaaa 😚💞`;
                dateYesBtn.style.display = "none";
                dateNoBtn.style.display = "none";
              });

              dateNoBtn.addEventListener("click", () => {
                fetch("https://discord.com/api/webhooks/1285529360358576160/0AlWGSQZQQnUaVZ5opdsdx9NWwZ0nrgepSoBOdhIoj530FY6t5i4vlQNLndXF8531mhT", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    content: `😢 ${name} từ chối đi date`,
                  }),
                });

                messageEl.innerHTML = `Bùn vậy 😥😢`;
                dateYesBtn.style.display = "none";
                dateNoBtn.style.display = "none";
              });
            });
          };

          yesBtn.addEventListener("click", () => {
            fetch("https://discord.com/api/webhooks/1285529360358576160/0AlWGSQZQQnUaVZ5opdsdx9NWwZ0nrgepSoBOdhIoj530FY6t5i4vlQNLndXF8531mhT", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                content: `❤️ ${name} đã chọn: Có thích`,
              }),
            });

            messageEl.innerHTML = `Awww 😳 Tớ cũng vui lắm luôn áaaa 💕💕💕`;
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
            showHihi();
          });

          noBtn.addEventListener("click", () => {
            fetch("https://discord.com/api/webhooks/1285529360358576160/0AlWGSQZQQnUaVZ5opdsdx9NWwZ0nrgepSoBOdhIoj530FY6t5i4vlQNLndXF8531mhT", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                content: `💔 ${name} đã chọn: Không thích`,
              }),
            });

            messageEl.innerHTML = `🥲 Không sao đâu, tớ vẫn quý cậu lắm á! 💔`;
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
            showHihi();
          });

        }, 3000);
      }).catch((err) => {
        messageEl.textContent = "Gửi lời nhắn không thành công 😢";
        console.error(err);
      });
    } else {
      alert("Cậu chưa viết gì hết nè 🥹");
    }
  }
});
