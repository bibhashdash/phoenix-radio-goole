const shows = [
  {
    showName: "Maureen Meets",
    showHost: "DJ Maureen Brown",
    showDays: ["Monday", "Wednesday", "Friday"],
    showStartHour: 13,
    showEndHour: 15,
  },
  {
    showName: "Alt Mix",
    showHost: "DJ Julie Shaw",
    showDays: ["Wednesday", "Thursday"],
    showStartHour: 18,
    showEndHour: 20,
  },
  {
    showName: "Super Seventies",
    showHost: "DJ Gary Brown",
    showDays: ["Monday", "Wednesday", "Friday"],
    showStartHour: 11,
    showEndHour: 13,
  },
  {
    showName: "Pop of the Ages",
    showHost: "DJ Emma",
    showDays: ["Tuesday"],
    showStartHour: 12,
    showEndHour: 14,
  },
  {
    showName: "Cinema Soundtrack",
    showHost: "DJ Lewis Kellett",
    showDays: ["Saturday"],
    showStartHour: 8,
    showEndHour: 10,
  },
  {
    showName: "Sally's Evening Chill",
    showHost: "DJ Sally Mollan",
    showDays: ["Monday", "Friday"],
    showStartHour: 19,
    showEndHour: 21,
  },
  {
    showName: "Light Classics",
    showHost: "DJ Barbara Jeffreys",
    showDays: ["Friday"],
    showStartHour: 9,
    showEndHour: 11,
  },
  {
    showName: "Sports Talk",
    showHost: "Bibhash",
    showDays: ["Friday"],
    showStartHour: 15,
    showEndHour: 16,
  },
  {
    showName: "Clubland Kaos",
    showHost: "DJ Martin",
    showDays: ["Monday"],
    showStartHour: 15,
    showEndHour: 17,
  },
  {
    showName: "The Sunday Sesh",
    showHost: "DJ Reeders",
    showDays: ["Sunday"],
    showStartHour: 21,
    showEndHour: 23,
  },
  {
    showName: "Exciting Eighties",
    showHost: "DJ Victoria Anne",
    showDays: ["Monday"],
    showStartHour: 21,
    showEndHour: 23,
  },
  {
    showName: "Vic and Mix",
    showHost: "DJ Victoria Anne",
    showDays: ["Tuesday"],
    showStartHour: 21,
    showEndHour: 23,
  },
];

let currentDay;
let currentHour;
let tempArray1;
const showHostSpan = document.getElementById("host");
const showNameSpan = document.getElementById("show-title");

const getNowLive = (day, hour) => {
  const found = shows.find((show) => {
    if (
      show.showDays.includes(day) &&
      hour >= show.showStartHour &&
      hour < show.showEndHour
    ) {
      return show;
    }
  });

  if (found) {
    showHostSpan.textContent = `${found.showHost}`;
    showNameSpan.textContent = `${found.showName}`;
  } else {
    showHostSpan.textContent = "DJ Phoenix Bot";
    showNameSpan.textContent = "The Phoenix Collection";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  currentDay = dayjs().format("dddd");
  currentHour = dayjs().format("H");
  showHostSpan.textContent = "";
  showNameSpan.textContent = "";
  getNowLive(currentDay, currentHour);
});

setInterval(() => {
  currentDay = dayjs().format("dddd");
  currentHour = dayjs().format("H");
  showHostSpan.textContent = "";
  showNameSpan.textContent = "";
  getNowLive(currentDay, currentHour);
}, 300000);

// chat modal
const chatModalDiv = document.querySelector("#chat-modal-icon");
chatModalDiv.addEventListener("click", () => {
  document
    .querySelector(".contact-us-modal-background")
    .classList.remove("hidden");
});

const chatModalDivClose = document.querySelector("#chat-modal-close-icon");

chatModalDivClose.addEventListener("click", () => {
  document
    .querySelector(".contact-us-modal-background")
    .classList.add("hidden");
});
