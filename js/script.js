// Selecting elements from the DOM for settings and timer display
const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const imageSection = document.querySelector(".image-section");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

const saveBtn = document.querySelector(".save");
const eventSpan = document.querySelector(".event");

let usersTime;

// Set the event year to next year by default
const setNextYear = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  eventYear.value = nextYear;
};

// Calculate and update the countdown timer
const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;

  const days = Math.floor(result / 1000 / 60 / 60 / 24);
  const hours = Math.floor(result / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(result / 1000 / 60) % 60;
  const seconds = Math.floor(result / 1000) % 60;

  daysCount.textContent = days;
  hoursCount.textContent = hours;
  minutesCount.textContent = minutes;
  secondsCount.textContent = seconds;
};

// Update the app with the new event details from the settings panel
const appUpdate = () => {
  eventSpan.textContent = eventName.value;
  // Create a Date object from the event inputs (month day year format)
  usersTime = new Date(
    `${eventMonth.value} ${eventDay.value} ${eventYear.value}`
  );
  // Update background image in the image section
  imageSection.style.backgroundImage = `url('${eventImg.value}')`;
  setTime();
};

// Toggle settings panel visibility when the settings button is clicked
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("active");
});

// Save new settings and update the countdown when the save button is clicked
saveBtn.addEventListener("click", appUpdate);

// Initialize the app: set default event year, update countdown, and refresh every second
setNextYear();
appUpdate();
setInterval(setTime, 1000);
