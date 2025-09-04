const toEmail = "julian.garcia.hernandez11@gmail.com";
const emailButton = document.getElementById("email-button");

let senderName = "",
  from = "",
  subject = "",
  body = "";

function createSubjectLine(inSenderName) {
  if (inSenderName != "") {
    return `${inSenderName} — BUSINESS INQUIRY`;
  }
  return subject;
}

function sendEmail() {
  senderName = document.getElementById("sender-name").value;
  fromEmail = document.getElementById("from-email-address").value;
  subject = createSubjectLine(senderName);
  body = document.getElementById("email-text").value;
  body = encodeURIComponent(body);
  console.log(body);

  document.location =
    "mailto:" + toEmail + "?subject=" + subject + "&body=" + body;
}

emailButton.addEventListener("click", sendEmail);
