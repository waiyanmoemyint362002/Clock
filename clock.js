const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector("#sc");
const showDate = document.querySelector(".date");

const di_h = document.getElementById("di_h");
const di_m = document.getElementById("di_m");
const di_s = document.getElementById("di_s");
const di_daynight = document.getElementById("di_daynight");

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");

const months = [
  "Jan",
  "Feby",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


let day,hh,mm,ss,dd,month,year,week;

setInterval(() => {
  day = new Date();
  hh = day.getHours() * 30;
  mm = day.getMinutes() * deg;
  ss = day.getSeconds() * deg;

  dd = day.getDate();
  month = months[day.getMonth()];
  year = day.getFullYear();
  week = days[day.getDay()];

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
  showDate.textContent =`${dd} ${month} ${year} ${week}`;

});

function running() {
  day = new Date();
  hh = day.getHours();
  mm = day.getMinutes();
  ss = day.getSeconds();
  ampm = hh >= 12 ? "PM" : "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh -= 12;
  }
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }

  di_h.innerHTML = hh;
  di_m.innerHTML = mm;
  di_s.innerHTML = ss;
  di_daynight.innerHTML = ampm;
}

setInterval(running, 1000);

light.addEventListener("click", function () {
  body.style.backgroundColor = "#fff";
  dark.style.color = "#000";
  light.style.color = "#000";
  light.style.opacity = "0.5";
});

dark.addEventListener("click", function () {
  body.style.backgroundColor = "#091921";
  light.style.color = "#fff";
  dark.style.color = "#000";
});
