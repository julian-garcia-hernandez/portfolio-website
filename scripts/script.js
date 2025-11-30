const experience = {
  jobs: [
    {
      employer: "DELL TECHNOLOGIES",
      title: "Software Engineer",
      description:
        "\tI worked at Dell for 1 year and 7 months. During that time, I improved the usability of Dell's self-support page.\n\tThis involved making its web components display properly for different user agents.\n\tThe impact of my work there affected many people worldwide as this website was visited by 220k+ people on a monthly basis.\n\tI also created over 100+ unit tests for my team's codebase. I brought the code coverage rating from 41% to 96%. This greatly improved code maintainability and made it clearer for collaborators to understand the codebase.\n\tApart from my experience as an engineer, I was also a member of the ITDP (IT Development Program. In the ITDP I attended numerous business developmental workshops and networking events.\n\tThe program also gave me mentorship opportunites which I took advantage of learning from professionals of 15+ years.\n\tOverall, Dell was a great introduction to my career as software engineer, I got experience shipping software, collaborating remotely, and networking with industry professionals.",
      imageSrc: "images/work-experience/dell.jpg",
      caption: "The Dell headquarters in Round Rock, TX.",
      class: "swe-img",
    },
    {
      employer: "DELL TECHNOLOGIES",
      title: "Engineering Intern",
      description:
        "\tDuring my internship at Dell, I worked under Identity Access Management (IAM). My project was to build a Microsoft Teams chatbot that would help my team diagnose and troubleshoot issues with our products' APIs.\n\tFeatures the chatbot had that other tools (Swagger/Postman) did not were real time API status updates, relevant documentation on how to use the API, and integration with a MS Teams environment.\n\tThese features reduced time spent fixing API related bugs by 30%.\n\tAt the end of the internship, I presented the project to Dell's IAM stakeholders. I talked about what I learned, some challenges I faced, and what I would do differently had I started over.\n\tThe presentation went well, I ended up getting a return offer to start full-time 2023.",
      imageSrc: "images/work-experience/internship.jpg",
      caption: "Austin skyline during my internship.",
      class: "internship-img",
    },
  ],
  projects: [
    {
      context: "PORTFOLIO",
      name: "This Website",
      description:
        '\tThe idea was to make something unique amongst engineering portfolios. To standout. I was trying to avoid something that said, "I work in the tech field."\n\tI also wanted the portfolio to feel retro and antiquated. That\'s why I based the styling around that of newspapers.\n\tThis project was created using HTML, CSS, and Javascript. I wanted to refine my web development fundamentals and this was an easy enough project to do that.\n\tThe most challenging aspect was responsive design. It was already hard enough adapting the styling from a paper medium to a screen medium, and it was even more difficult for different kinds of screens. Still, I had fun mixing the old (newspapers) and the new (websites). The scrollable newspaper column was my probably my favorite UI element that I created.\n\tThe only thing I would do differently would be giving the website more interactibility. Perhaps including a newspaper game (e.g, a crossword, word search, or sudoku puzzle) would make the website more engaging for the user.',
      imageSrc: "images/projects/portfolio.jpg",
      caption: "Working on the website.",
      class: "portfolio-img",
    },
    {
      context: "SENIOR DESIGN",
      name: "OpenGrader",
      description:
        "\tIt's pretty common for TAs and graders to take long on grading assignments. The sheer number of assignments they have to go through is only part of the problem. Reviewing code in within itself is pretty time consuming.\n\tOpenGrader sought to mitigate some of that struggle for graders.\n\tFeatures like file test cases (a.k.a grading automation), inline commenting (student feedback), and multi-language support aimed to make grading easier and quicker for TAs.\n\tMy biggest contribution to the project was syntax highlighting and front-end unit tests.",
      imageSrc: "images/projects/opengrader.jpg",
      caption: "My team and I presenting OpenGrader.",
      class: "opengrader-img",
    },
  ],
};

const aboutMeText =
  "\tI am a software engineer with a focus on web development. I have one year and seven months of experience working for Dell Technologies.\n\tMy strengths include attention to detail, creativity and communication. I care a lot about the way things feel, and give it my all to make web experiences feel as pretty as possible.\n\tMy current short-term goal is to build one more project with HTML/CSS/JS before I move onto a web framework. I want to acheive this goal during Q1 2026.\n\tMy long-term goal is to build a free, open-source MIDI education service using Vue.js, this is something that I want to have done by the end of Q4 2026.\n\tI want future employers to see these projects as displays of service, creativity, and design. I want to work with people that value those three as much as I do.";

let index = 0;
let jobsIndex = 0;
let projectsIndex = 0;

const skillsImage = document.getElementById("skills-image");

const jobs = document.getElementById("jobs");
let employer = document.getElementById("employer");
let title = document.getElementById("title");
let jobDescription = document.getElementById("job-description");
let jobImage = document.getElementById("job-image");
let jobImageCaption = document.getElementById("job-image-caption");

let projectImage = document.getElementById("project-image");
let projectImageCaption = document.getElementById("project-image-caption");

const projects = document.getElementById("projects");
let projectContext = document.getElementById("project-context");
let projectName = document.getElementById("project-name");
let projectDescription = document.getElementById("project-description");

const aboutMePara = document.getElementById("about-me-para");

const dateElement = document.getElementById("date");

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

  projectName.textContent = experience["projects"][projectsIndex].name;
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

const jobsClassList = jobImage.classList;
const projectsClassList = projectImage.classList;
let removeIndex = 0;

function previousEntry(items, itemType) {
  if (itemType == "jobs") {
    if (jobsIndex == 0) {
      jobsIndex = items.length - 1;
    } else {
      jobsIndex--;
    }
    employer.textContent = items[jobsIndex].employer;
    title.textContent = items[jobsIndex].title;
    jobImage.setAttribute("src", items[jobsIndex].imageSrc);
    removeIndex = Math.abs((jobsIndex + 1) % items.length);
    jobImage.classList.toggle(items[removeIndex].class);
    jobImage.classList.toggle(items[jobsIndex].class);
    jobImageCaption.textContent = items[jobsIndex].caption;

    jobDescription.textContent = items[jobsIndex].description;
  } else if (itemType == "projects") {
    if (projectsIndex == 0) {
      projectsIndex = items.length - 1;
    } else {
      projectsIndex--;
    }
    projectContext.textContent = items[projectsIndex].context;
    projectName.textContent = items[projectsIndex].name;
    projectDescription.textContent = items[projectsIndex].description;
    projectImage.setAttribute("src", items[projectsIndex].imageSrc);
    removeIndex = Math.abs((projectsIndex + 1) % items.length);
    projectImage.classList.toggle(items[removeIndex].class);
    projectImage.classList.toggle(items[projectsIndex].class);
    projectImageCaption.textContent = items[projectsIndex].caption;
  }
}

function nextEntry(items, itemType) {
  if (itemType == "jobs") {
    if (jobsIndex == items.length - 1) {
      jobsIndex = 0;
    } else {
      jobsIndex++;
    }

    employer.textContent = items[jobsIndex].employer;
    title.textContent = items[jobsIndex].title;

    jobImage.setAttribute("src", items[jobsIndex].imageSrc);
    removeIndex = Math.abs((jobsIndex - 1) % items.length);
    jobImage.classList.toggle(items[removeIndex].class);
    jobImage.classList.toggle(items[jobsIndex].class);
    jobImageCaption.textContent = items[jobsIndex].caption;
    jobDescription.textContent = items[jobsIndex].description;
  } else if (itemType == "projects") {
    if (projectsIndex == items.length - 1) {
      projectsIndex = 0;
    } else {
      projectsIndex++;
    }
    projectContext.textContent = items[projectsIndex].context;
    projectName.textContext = items[projectsIndex].name;

    projectImage.setAttribute("src", items[projectsIndex].imageSrc);
    removeIndex = Math.abs((projectsIndex - 1) % items.length);
    projectImage.classList.toggle(items[removeIndex].class);
    projectImage.classList.toggle(items[projectsIndex].class);
    projectImageCaption.textContent = items[projectsIndex].caption;

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
      previousEntry(experience[articleType], articleType);
    });
  } else if (button.className == "next-button") {
    button.addEventListener("click", (event) => {
      articleType =
        event.currentTarget.parentElement.parentElement.parentElement.getAttribute(
          "id"
        );
      nextEntry(experience[articleType], articleType);
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
        jobImage = document.createElement("img");
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
    projectContext = document.createElement("h3");
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

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function getDateString() {
  return new Date().toLocaleDateString(undefined, options).toUpperCase();
}

function displayDate() {
  dateElement.textContent = `EARTH, ${getDateString()}`;
}

loadInitial();
displayDate();

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
