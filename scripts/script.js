const experience = {
  jobs: [
    {
      employer: "DELL TECHNOLOGIES",
      title: "Software Engineer",
      description:
        "\tI worked here a total of 1 year and 7 months. I improved Dell's support page website by adding accessibility feaatures to the company's self-support website. I also created over 100+ unit tests for my team's codebase. The unit tests made the code more maintainable for my team. I brought code coverage from 41% to 96%. This greatly improved code maintainability and made it easier to understand what the MVC components were doing.",
    },
    {
      employer: "DELL TECHNOLOGIES",
      title: "Engineering Intern",
      description:
        "\tI built a MS Teams chatbot to help my team be more efficient when validating APIs. It was an alternative to tools like Swagger or Postman, except with a chat interface.\n\tThis tool helped my team be more productive when it came to testing our internal APIs.\n\tAt the end of the internship, I gave a proof of concept presentation to all of my team's business leaders.",
    },
  ],
  projects: [
    {
      context: "For Myself",
      name: "This Website",
      description:
        'The idea was to make something unique amongst engineering portfolios. To standout. I was trying to avoid something that said, "I work in the tech field."\n\tI also wanted the portfolio to feel retro and antiquated. That\'s why I based the styling around that of newspapers.\n\tThis project was created using HTML, CSS, and Javascript. I wanted to refine my web development fundamentals and this was an easy enough project to do that.\n\tThe most challenging aspect was responsive design. It was already hard enough adapting the styling from a paper medium to a screen medium, and it was even more difficult for different kinds of screens. Still, I had fun mixing the old (newspapers) and the new (websites). The scrollable newspaper column was my probably my favorite UI element that I created.\n\tThe only thing I would do differently would be giving the website more interactibility. Perhaps including a newspaper game (e.g, a crossword, word search, or sudoku puzzle) would make the website more engaging for the user.',
    },
    {
      context: "SENIOR DESIGN",
      name: "OpenGrader",
      description:
        "\tIt's pretty common for TAs and graders to take long on grading assignments. The sheer number of assignments they have to go through is only part of the problem. Reviewing code in within itself is pretty time consuming.\n\tOpenGrader sought to mitigate some of that struggle for graders.\n\tFeatures like file test cases (a.k.a grading automation), inline commenting (student feedback), and multi-language support aimed to make grading easier and quicker for TAs.\n\tMy biggest contribution to the project was syntax highlighting and front-end unit tests.",
    },
  ],
};

const aboutMeText =
  "\tI am a software engineer with a focus on web development. My strengths include attention to detail, creativity and communication.\n\tI care a lot about the way things feel, and give it my all to make web experiences feel as pretty as possible. My goal is to leverage these strengths to help clients share their vision with the rest of world.";

let index = 0;
let jobsIndex = 0;
let projectsIndex = 0;

const skillsImage = document.getElementById("skills-image");

const jobs = document.getElementById("jobs");
let employer = document.getElementById("employer");
let title = document.getElementById("title");
let jobDescription = document.getElementById("job-description");

const projects = document.getElementById("projects");
let project = document.getElementById("project");
let projectDescription = document.getElementById("project-description");

const aboutMePara = document.getElementById("about-me-para");

const directionButtons = document.querySelectorAll(
  ".previous-button, .next-button"
);

const toEmail = "julian.garcia.hernandez11@gmail.com";
const sendEmailButton = document.getElementById("email-button");

const authorHeading = document.createElement("h5");
authorHeading.textContent = "By J.G HERNANDEZ";

let horizontalLine = document.createElement("div");
horizontalLine.className = "horizontal-line";

const sectionLine = document.createElement("div");
sectionLine.className = "section-horizontal-line";

let senderName = "",
  from = "",
  subject = "",
  body = "";

function loadInitial() {
  employer.textContent = experience["jobs"][jobsIndex].employer;
  title.textContent = experience["jobs"][jobsIndex].title;
  jobDescription.textContent = experience["jobs"][jobsIndex].description;

  project.textContent = experience["projects"][projectsIndex].name;
  projectDescription.textContent =
    experience["projects"][projectsIndex].description;

  aboutMePara.textContent = aboutMeText;
}

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

  document.location =
    "mailto:" + toEmail + "?subject=" + subject + "&body=" + body;
}

sendEmailButton.addEventListener("click", sendEmail);

//only gets triggered if the button is pressed
function previousPara(items, itemType) {
  if (itemType == "jobs") {
    if (jobsIndex == 0) {
      jobsIndex = items.length - 1;
    } else {
      jobsIndex--;
    }
    employer.textContent = items[jobsIndex].employer;
    title.textContent = items[jobsIndex].title;
    jobDescription.textContent = items[jobsIndex].description;
  } else if (itemType == "projects") {
    if (projectsIndex == 0) {
      projectsIndex = items.length - 1;
    } else {
      projectsIndex--;
    }
    project.textContent = items[projectsIndex].name;
    projectDescription.textContent = items[projectsIndex].description;
  }
}

//only gets triggered if the button is pressed
function nextPara(items, itemType) {
  if (itemType == "jobs") {
    if (jobsIndex == items.length - 1) {
      jobsIndex = 0;
    } else {
      jobsIndex++;
    }
    employer.textContent = items[jobsIndex].employer;
    title.textContent = items[jobsIndex].title;
    jobDescription.textContent = items[jobsIndex].description;
  } else if (itemType == "projects") {
    if (projectsIndex == items.length - 1) {
      projectsIndex = 0;
    } else {
      projectsIndex++;
    }
    project.textContent = items[projectsIndex].name;
    projectDescription.textContent = items[projectsIndex].description;
  }
}

let articleType = "";
directionButtons.forEach((button) => {
  if (button.className == "previous-button") {
    button.addEventListener("click", (event) => {
      articleType =
        event.currentTarget.parentElement.parentElement.parentElement.getAttribute(
          "id"
        );
      previousPara(experience[articleType], articleType);
    });
  } else if (button.className == "next-button") {
    button.addEventListener("click", (event) => {
      articleType =
        event.currentTarget.parentElement.parentElement.parentElement.getAttribute(
          "id"
        );
      nextPara(experience[articleType], articleType);
    });
  }
});

function displayArticle(articleType) {
  if (articleType == "jobs") {
    const jobsArray = experience["jobs"];
    const jobsSection = document.createElement("section");
    const employerHeading = document.createElement("h3");
    const titleHeading = document.createElement("h4");
    const descriptionPara = document.createElement("p");

    for (let i = 1; i < jobsArray.length; i++) {
      employerHeading.textContent = jobsArray[i].employer;
      titleHeading.textContent = jobsArray[i].title;
      descriptionPara.textContent = jobsArray[i].description;

      employerHeading.className = "employer";
      titleHeading.className = "title";
      descriptionPara.className = "job-description";

      jobsSection.appendChild(employerHeading);
      jobsSection.appendChild(horizontalLine.cloneNode()); //this might not work if you add more jobs experience
      jobsSection.appendChild(titleHeading);
      jobsSection.appendChild(horizontalLine.cloneNode());
      jobsSection.appendChild(authorHeading);

      if (titleHeading.textContent == "Engineering Intern") {
        const jobFigure = document.createElement("figure");
        const jobImage = document.createElement("img");
        jobImage.setAttribute("src", "images/work-experience/internship.jpg");
        const jobCaption = document.createElement("figcaption");
        jobCaption.textContent =
          "A photo of Austin I took during the internship.";

        jobFigure.appendChild(jobImage);
        jobFigure.appendChild(jobCaption);
        jobsSection.appendChild(jobFigure);
        jobsSection.appendChild(horizontalLine.cloneNode());
      }

      jobsSection.appendChild(descriptionPara);
      jobs.appendChild(sectionLine.cloneNode());
      jobs.appendChild(jobsSection);
    }
  } else if (articleType == "projects") {
    const projectsArray = experience["projects"];

    const projectsSection = document.createElement("section");
    const projectContext = document.createElement("h3");
    const projectHeading = document.createElement("h4");
    const projectDescription = document.createElement("p");

    for (let i = 1; i < projectsArray.length; i++) {
      projectContext.textContent = projectsArray[i].context;
      projectHeading.textContent = projectsArray[i].name;
      projectDescription.textContent = projectsArray[i].description;

      projectContext.className = "employer"; //FIX THIS, THE CLASSNAMES NEED TO BE MORE APPROPRIATELY NAMED
      projectHeading.className = "title";
      projectDescription.className = "job-description";

      projectsSection.appendChild(projectContext);
      projectsSection.appendChild(horizontalLine); //this might not work if you add more jobs experience
      projectsSection.appendChild(projectHeading);
      projectsSection.appendChild(horizontalLine.cloneNode());
      projectsSection.appendChild(authorHeading.cloneNode(true));

      projectsSection.appendChild(projectDescription);
     
      projects.appendChild(sectionLine.cloneNode());
      projects.appendChild(projectsSection);
    }
  }
}

loadInitial();

if (window.innerWidth <= 440) {
  displayArticle("jobs");
  displayArticle("projects");
  skillsImage.setAttribute("src", "images/logos/square-composite-image-bw.png");
} else if (440 <= window.innerWidth && window.innerWidth <= 820) {
  displayArticle("jobs");
  displayArticle("projects");
  skillsImage.setAttribute("src", "images/logos/square-composite-image-bw.png");
}

const pad = document.getElementById("pad");
function ellipsePadding() {
  pad.textContent = pad.textContent.padStart(14, " . ");
}

if (440 <= window.innerWidth && window.innerWidth <= 820) {
  ellipsePadding();
}
