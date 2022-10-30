const shows = [
  {
    showName: "Maureen Meets",
    showHost: "DJ Maureen Brown",
    showDays: ["Monday", "Wednesday", "Friday"],
    showStartHour: 13,
    showEndHour: 15,
  },
  {
    showName: "Pick 'n Mix",
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
    showName: "Mesmerise",
    showHost: "DJ Steve",
    showDays: ["Thursday"],
    showStartHour: 20,
    showEndHour: 22,
  },
  {
    showName: "Cinema Soundtrack",
    showHost: "DJ Lewis Kellett",
    showDays: ["Saturday"],
    showStartHour: 13,
    showEndHour: 15,
  },
  {
    showName: "Sally's Evening Chill",
    showHost: "DJ Sally Mollan",
    showDays: ["Monday", "Friday"],
    showStartHour: 19,
    showEndHour: 21,
  },
  {
    showName: "Jazz with Jules",
    showHost: "DJ Julie Shillito",
    showDays: ["Saturday", "Sunday"],
    showStartHour: 20,
    showEndHour: 22,
  },
  {
    showName: "The Mosh Pit",
    showHost: "DJ Bibhash Dash",
    showDays: ["Wednesday"],
    showStartHour: 20,
    showEndHour: 22,
  },
];

let currentDay;
let currentHour;
const showHostSpan = document.getElementById("host");
const showNameSpan = document.getElementById("show-title");

const getNowLive = () => {
  currentDay = dayjs().format("dddd");
  currentHour = dayjs().format("H");

  for (let i = 0; i < shows.length; i++) {
    if (shows[i].showDays.includes(currentDay)) {
      if (
        currentHour >= shows[i].showStartHour &&
        currentHour < shows[i].showEndHour
      ) {
        showHostSpan.textContent = `${shows[i].showHost}`;
        showNameSpan.textContent = `'${shows[i].showName}'`;
      }
    } else {
      showHostSpan.textContent = "DJ PhoenixBot";
      showNameSpan.textContent = "'Non-stop music'";
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getNowLive();
});

setInterval(() => {
  getNowLive();
}, 300000);
