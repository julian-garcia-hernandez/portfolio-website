const jobs = [
  {
    company: "Dell Technologies",
    title: "Software Engineer",
    description:
      "&emsp; When my team had to think of an idea for our senior design project, first we spent some time looking for problems in our environment. As CS students, we noticed many of our peers struggling to receive their grades on time. In an effort to address this issue, my team and I came up with OpenGrader.<br />&emsp; OpenGrader sought to reduce grading time. Essentially what that means is make it easier for TAs or professors to grade the large amount of assignments they receive. We started to think about how we would acheive this. That is when we came up with ideas for features like file test cases (a.k.a grading automation), inline commenting (student feedback), and multi-language support. <br />&emsp; My biggest contribution to the project was syntax highlighting, a feature meant to ease code readibility. I also worked on unit testing for the frontend. <br /> &emsp; What I found the most challenging was learning the tools, languages and frameworks. In this project, I was introduced to Docker, Next.js and Go for the first time. It was somewhat overwhelming to learn various things at the same time, especially while trying to build something, but I managed to contribute something useful to the project.<br /> &emsp; Granted, I really enjoyed working on OpenGrader. It helped me solidfy all the engineering principles that are super important: requirement gathering, design, implementation, and feedback. <br />",
  },
  {
    company: "Dell Technologies",
    title: "Software Engineer Intern",
    description:
      "&emsp; My project for this 10 week internship was to create a Microsoft Teams chat bot. The idea for the chatbot was to query it for our internal API responses. It was meant as an alternative to the tools that we had like Swagger or Postman.<br/>&emsp;I won't lie, I was confused like 90% of the time because everything I was learning was so new to me. I mean I was being exposed to the corporate entity for the first time, it was my first time being a software engineer, and it was my first job working remote. I needed some time to adapt to everything. There were some hiccups along the way, but I tried my best and gave it my all.<br/>&emsp;Thankfully, I was not alone. I had a mentor throughout the entire experience that gave me pointers on how to win in a corporate level position. He gave me advice on how to become a better programmer and stepped in whenever I needed a question answered. The team around me also gave me some help and provided support as well.<br/>&emsp;At the end of the internship I gave a presentation to our organization on the project that I was assigned. The presenation went well and I received acknowledgements from the senior staff.<br/>&emsp;I think I could have done better in terms of problem solving? I felt that at the time of working as an intern, I lacked the confidence to suggest areas of improvement. I think that I lacked confidence to even see and identify potential areas of improvement. I feel that if I came up with my own solutions, I would have likely had an easier timeworking on what I was working on. I think that when you come up with something yourself, you have a better understanding of its context as opposed to being handed an assignment that you are just told to complete. However, I give myself grace because I was in a different state of mind back then, and understand why I found it hard to be a paid, creative problem solver for the first time. <br/>emsp;Overall the internship was a great introduction to my career, and although there was areas in which I think I could have handled the opportunity better, I am still thankful for its appearance in my life.",
  },
];

const directionButtons = document.querySelectorAll(
  ".previous-button, .next-button"
);

const toEmail = "julian.garcia.hernandez11@gmail.com";
const sendEmailButton = document.getElementById("email-button");

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

sendEmailButton.addEventListener("click", sendEmail);

let index = 0;
let company = document.getElementById("company");
let title = document.getElementById("title");
let description = document.getElementById("description");

function previousItem() {
  if (index == 0) {
    index = jobs.length - 1;
  } else {
    index--;
  }
  company.textContent = jobs[index].company;
  title.textContent = jobs[index].title;
  description.textContent = jobs[index].description;
}

function nextItem() {
  if (index == jobs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  company.textContent = jobs[index].company;
  title.textContent = jobs[index].title;
  description.textContent = jobs[index].description;
}

directionButtons.forEach((button) => {
  if (button.className == "next-button") {
    button.addEventListener("click", nextItem);
  } else if (button.className == "previous-button") {
    button.addEventListener("click", previousItem);
  }
});
