function send() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  let token = "YOUR_BOT_TOKEN";
  let chat_id = "YOUR_CHAT_ID";

  let message = `Yangi mijoz:\nIsm: ${name}\nTelefon: ${phone}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: chat_id,
      text: message
    })
  });

  alert("Yuborildi!");
}
