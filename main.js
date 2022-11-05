// Reviewers Info
const reviewers = {
  1: {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    testomonial:
      " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    image: "./images/image-tanya.jpg",
  },
  2: {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    testomonial:
      " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ",
    image: "./images/image-john.jpg",
  },
  3: {
    name: "Nour Okbi",
    job: "Front-end Developer",
    testomonial:
      " “ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur non nostrum eum modi? Fugiat inventore soluta aliquam numquam. Consectetur ad necessitatibus mollitia distinctio maxime excepturi? ” ",
    image: "./images/3.jpg",
  },
};
// Content Elements
const article = document.querySelector("article");
const name = document.querySelector("#name");
const job = document.querySelector("#job");
const image = document.querySelector(".image img");

// Slider Buttons
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  moveToRight();
});

prev.addEventListener("click", () => {
  moveToLeft();
});

let index = 1;

function moveToRight() {
  index++;
  if (index > Object.keys(reviewers).length) index = 1;
  if (index < 1) index = Object.keys(reviewers).length;
  changeContent(index);
}

function moveToLeft() {
  index--;
  if (index < 1) index = Object.keys(reviewers).length;
  if (index > Object.keys(reviewers).length) index = 1;
  changeContent(index);
}

function changeContent(i) {
  article.textContent = reviewers[`${i}`].testomonial;
  name.textContent = reviewers[`${i}`].name;
  job.textContent = reviewers[`${i}`].job;
  image.src = reviewers[`${i}`].image;
  image.alt = reviewers[`${i}`].name;
}
