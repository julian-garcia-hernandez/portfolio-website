const experience = {
  jobs: [
    {
      employer: "DELL TECHNOLOGIES",
      title: "Software Engineer",
      description:
        "I worked as an engineer for one year and seven months. During this time I added accessiblity feaatures to the company's self-support website. I also wrote a majority of our teams' unit tests.",
    },
    {
      employer: "DELL TECHNOLOGIES",
      title: "Engineering Intern",
      description:
        "This internship lasted 10 weeks. In that time, I built a Microsoft Teams chat bot. This chat bot allowed my team to be more efficient when validating APIs. It was an alternative to tools like Swagger or Postman, but with a chat interface. At the end of the internship, I gave a proof of concept presentation to all of my team's business leaders.",
    },
  ],
  projects: [
    {
      context: "For Myself",
      name: "This Website",
      description:
        'This project has been the most fun I have had building something. The idea was to make something that was unique amongst engineering portfolios. To standout. I did not want to make something that said, "I work in the tech field." I wanted my portfolio to have an analog feel to it. It had to feel retro and antiquated. I started to think about historical examples of how humans have presented information to a wide audience. That\'s when the idea of a newspaper came along.\n\tI chose to build this project in HTML, CSS, and Javascript. The idea was to ground myself on web development fundamentals.\n The most challenging aspect was designing for different screen sizes. It was hard to still make something feel like a newspaper if it was being rendered inside a phone screen. Even though it was challenging, it was fun figuring out how modern interfaces can still make use of older, but tried and true methods of presenting information. This would make for an intersting combination of UI/UX, technical writing, and text styling. A scrollable newspaper column was my favorite UI element to come up with.\n\tThe only thing I would do differently would be giving the website more interactibility. Perhaps including a newspaper game (e.g, a crossword, word search, or sudoku puzzle) could make the website more fun to use.\n\t',
    },
    {
      context: "SENIOR DESIGN",
      name: "OpenGrader",
      description:
        "A problem many CS students faced was receiving their grades in a timely manner. OpenGrader sought to reduce grading time. Features like file test cases (a.k.a grading automation), inline commenting (student feedback), and multi-language support aimed to make grading easier and quicker for TAs. My biggest contribution to the project was syntax highlighting, but I wrote unit tests for the frontend. This project solidified important engineering concepts like requirement gathering, designing around those requirements, and iterating upon that design through user feedback.",
    },
  ],
};

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

const directionButtons = document.querySelectorAll(
  ".previous-button, .next-button"
);

const toEmail = "julian.garcia.hernandez11@gmail.com";
const sendEmailButton = document.getElementById("email-button");

const authorHeading = document.createElement("h5");
authorHeading.textContent = "By J.G HERNANDEZ";

const horizontalLine = document.createElement("div");
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

      jobsSection.appendChild(sectionLine);
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

      projectsSection.appendChild(sectionLine.cloneNode());
      projectsSection.appendChild(projectContext);
      projectsSection.appendChild(horizontalLine); //this might not work if you add more jobs experience
      projectsSection.appendChild(projectHeading);
      projectsSection.appendChild(horizontalLine.cloneNode());
      projectsSection.appendChild(authorHeading.cloneNode(true));

      projectsSection.appendChild(projectDescription);

      projects.appendChild(projectsSection);
    }
  }
}

loadInitial();

if (window.innerWidth <= 440) {
  displayArticle("jobs");
  displayArticle("projects");

  skillsImage.setAttribute("src", "images/logos/square-composite-image-bw.png");
}
