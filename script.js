const shows = [
  {
    showName: "Maureen Meets",
    showHost: "DJ Maureen Brown",
    showDays: ["Monday", "Wednesday"],
    showStartHour: 12,
    showEndHour: 14,
  },
  {
    showName: "Total Decades 50s - 90s",
    showHost: "DJ Gary Brown",
    showDays: ["Monday", "Wednesday"],
    showStartHour: 10,
    showEndHour: 12,
  },
  {
    showName: "Light Classics",
    showHost: "DJ Barbara Jeffreys",
    showDays: ["Friday"],
    showStartHour: 10,
    showEndHour: 12,
  },
  // {
  //   showName: "Exciting Eighties",
  //   showHost: "DJ Vic Vixen",
  //   showDays: ["Monday"],
  //   showStartHour: 20,
  //   showEndHour: 22,
  // },
  {
    showName: "Magic Roundabout",
    showHost: "Dex Leighton",
    showDays: ["Saturday"],
    showStartHour: 21,
    showEndHour: 23,
  },
  // {
  //   showName: "Vix Mix",
  //   showHost: "DJ Vic Vixen",
  //   showDays: ["Tuesday"],
  //   showStartHour: 21,
  //   showEndHour: 23,
  // },
  {
    showName: "Music and Musings",
    showHost: "DJ Maverick",
    showDays: ["Thursday"],
    showStartHour: 10,
    showEndHour: 12,
  },
  {
    showName: "Betty Gee's ChatTrap Show",
    showHost: "DJ BettyGee",
    showDays: ["Thursday"],
    showStartHour: 20,
    showEndHour: 22,
  },
  {
    showName: "Betty Gee's ChatTrap Show",
    showHost: "DJ BettyGee",
    showDays: ["Friday"],
    showStartHour: 21,
    showEndHour: 23,
  },
  {
    showName: "River Sounds",
    showHost: "Coracle Pete",
    showDays: ["Tuesday"],
    showStartHour: 19,
    showEndHour: 21,
  },
  {
    showName: "Digital Daze",
    showHost: "Kelle, Emperor of the Universe",
    showDays: ["Saturday"],
    showStartHour: 19,
    showEndHour: 21,
  },
  {
    showName: "The Motown and Soul Show",
    showHost: "DJs Rob and Becky",
    showDays: ["Wednesday"],
    showStartHour: 20,
    showEndHour: 22,
  },
  {
    showName: "Tezza Nova",
    showHost: "DJ Tezza",
    showDays: ["Sunday"],
    showStartHour: 18,
    showEndHour: 20,
  },
  {
    showName: "Breakfast Show",
    showHost: "Echo Mike",
    showDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    showStartHour: 7,
    showEndHour: 10,
  },
  {
    showName: "Power Pop Party",
    showHost: "DJ Stuart",
    showDays: ["Friday"],
    showStartHour: 19,
    showEndHour: 21,
  },
  {
    showName: "School Dinners Show",
    showHost: "DJ Cashew Nuts",
    showDays: ["Friday"],
    showStartHour: 12,
    showEndHour: 14,
  },
  {
    showName: "Kai's Kool Music",
    showHost: "DJ Kai Greenwood",
    showDays: ["Friday"],
    showStartHour: 14,
    showEndHour: 16,
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
