const experience = {
  jobs: [
    {
      employer: "DELL TECHNOLOGIES",
      title: "Software Engineer",
      description:
        "I was employed at Dell for a year and seven months. When I was there, I worked in the Dell self-support team. We were responsible for maintaining the dell.com/support website, a self-service solution for any troublshooting needs a dell client may have. During my time there, I wore several hats. Some days I would get assigned to work on the frontend; do some changes to the layout of certain forms or fields. Other days I spent some time writing unit tests. It really just depended on what type of story I would get assigned to work on by my dev lead and product manager. The language of choice was C# and we used the ASP.NET MVC Framework to build our products. For version control, we used Gitlab, and for product management, Jira. We organized our using Agile Methodolgies. Communication was entirely over Microsoft Teams since all of our team was spread across different parts of the world. I think that my biggest strength in a role like this was establishing relationships in person. I find that its easier for me to leave an impression in the physical presence of another human being, as opposed to alone, very often without the physical representation of who I am. Sure there were cameras on the laptops, but many times people do not like turning them on. As a privacy freak myself, I completely understand that sentiment and do not feel super comfortable with a camera in my face. Luckily, Dell sponsored various conferences in which I got to meet and network with many wonderful people. That really made up for the majority of the time spent online. I think my biggest weakness in a role like this was getting over imposter syndrome. I just always felt like there was a skill gap of where I was, and where I needed to be. Not just technically, but also in terms of soft skills. I felt that my profeciency as a communicator was lacking. Prior to this job I thought that I was a good communicator, but being in those panels with cross functional teams was a humbling experience. I know now that I was being to hard on myself, and that there are other factors that come into play that determine my development; some of which I have no control over. What I loved the most about Dell was definitely the people. I made many work friends, and managed to meet with some highly intelligent people. My favorite part of having worked there was probably the work conferences, just because it was nice seeing each other in person. However, I did have some gripes with my time at Dell. I think not seeing the impact of my work greatly affected my job satisfaction. I think that if I knew and saw the effects of my work on individuals I would have been a little more happier during my time there. Overall though, I had a pretty good experience at Dell. It was a great introduction to my career and taught me how to be a professional.",
    },
    {
      employer: "DELL TECHNOLOGIES",
      title: "Engineering Intern",
      description:
        "&emsp; My project for this 10 week internship was to create a Microsoft Teams chat bot. The idea for the chatbot was to query it for our internal API responses. It was meant as an alternative to the tools that we had like Swagger or Postman.<br/>&emsp;I won't lie, I was confused like 90% of the time because everything I was learning was so new to me. I mean I was being exposed to the corporate entity for the first time, it was my first time being a software engineer, and it was my first job working remote. I needed some time to adapt to everything. There were some hiccups along the way, but I tried my best and gave it my all.<br/>&emsp;Thankfully, I was not alone. I had a mentor throughout the entire experience that gave me pointers on how to win in a corporate level position. He gave me advice on how to become a better programmer and stepped in whenever I needed a question answered. The team around me also gave me some help and provided support as well.<br/>&emsp;At the end of the internship I gave a presentation to our organization on the project that I was assigned. The presenation went well and I received acknowledgements from the senior staff.<br/>&emsp;I think I could have done better in terms of problem solving? I felt that at the time of working as an intern, I lacked the confidence to suggest areas of improvement. I think that I lacked confidence to even see and identify potential areas of improvement. I feel that if I came up with my own solutions, I would have likely had an easier timeworking on what I was working on. I think that when you come up with something yourself, you have a better understanding of its context as opposed to being handed an assignment that you are just told to complete. However, I give myself grace because I was in a different state of mind back then, and understand why I found it hard to be a paid, creative problem solver for the first time. <br/>emsp;Overall the internship was a great introduction to my career, and although there was areas in which I think I could have handled the opportunity better, I am still thankful for its appearance in my life.",
    },
  ],
  projects: [
    {
      name: "This Website (Portfolio)",
      description:
        "This project has been the most fun I have had building something. The idea was to make something that was unique amongst engineering portfolios. To standout. I did not want to make something that said, \"I work in the tech field.\" Even though I work in the technology sector, I wanted my portfolio to have some type of analog feel to it. I thought a good way of doing this was to portray my career and who I am through a more antiquated medium: the newspaper. There's a certain juxtaposition that happens when you place more advanced technology such as a website next to its more antiquated forms, in this case a newspaper. I'm also just a huge fan of older media. <br/>In terms of career development, I wanted to go back and ground myself on the fundamentals of web development. This project was made with HTML, CSS, and Javascript. The actual idea of the newspaper came from my love for older forms of media. I feel bad about saying that newspapers are outdated. I feel bad that times change always, forever and I guess this website was an artistic effort of holding onto those moments that will inevitably pass. Almost nobody reads newspapers anymore, and eventually that form of media will be obsolete. I thought it would be pretty ironic for someone who works with computer technology and information on such a granular level to display their work in such a historic way. I wanted to juxtapose all of these technological advancements against the backdrop of such a historic way of presenting information. Overall, the project took me about a month and a half to plan and create. <br/>I think that the most challenging aspect to a project like this was the design. I obviously stole the idea from the NY Times and copied their formatting, but found that their style guide did not lend itself well to the website format. My originality came in scrollable columns, something that is not possible on paper. This allows for paragraphs like the project and job description to be kept neatly and confined to the newspaper format even if they are long pieces of text. I think one area of improvement would be to give the website more pictures or interactibility. Maybe, include like a newspaper game like a crossword, word search, or sudoku. The idea is to make the website more fun in some way for the user, and not have them overwhelmed by the long pieces of text.",
    },
    {
      name: "OpenGrader",
      description:
        "When my team had to think of an idea for our senior design project, first we spent some time looking for problems in our environment. As CS students, we noticed many of our peers struggling to receive their grades on time. In an effort to address this issue, my team and I came up with OpenGrader. OpenGrader sought to reduce grading time. Essentially what that means is make it easier for TAs or professors to grade the large amount of assignments they receive. We started to think about how we would acheive this. That is when we came up with ideas for features like file test cases (a.k.a grading automation), inline commenting (student feedback), and multi-language support. My biggest contribution to the project was syntax highlighting, a feature meant to ease code readibility. I also worked on unit testing for the frontend. What I found the most challenging was learning the tools, languages and frameworks. In this project, I was introduced to Docker, Next.js and Go for the first time. It was somewhat overwhelming to learn various things at the same time, especially while trying to build something, but I managed to contribute something useful to the project. Granted, I really enjoyed working on OpenGrader. It helped me solidfy all the engineering principles that are super important: requirement gathering, design, implementation, and feedback.",
    },
  ],
};

let index = 0;
let jobsIndex = 0;
let projectsIndex = 0;
let employer = document.getElementById("employer");
let title = document.getElementById("title");
let jobDescription = document.getElementById("job-description");

let project = document.getElementById("project");
let projectDescription = document.getElementById("project-description");

const directionButtons = document.querySelectorAll(
  ".previous-button, .next-button"
);

const toEmail = "julian.garcia.hernandez11@gmail.com";
const sendEmailButton = document.getElementById("email-button");

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
  console.log(body);

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
  } else {
    console.log("no item type provided");
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
  } else {
    index++;
  }
  company.textContent = jobs[index].company;
  title.textContent = jobs[index].title;
  description.textContent = jobs[index].description;
}

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

loadInitial();
