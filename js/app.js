const getUserInput = document.getElementById("get-ip");
const searchBtn = document.getElementById("search-btn");
const showIp = document.getElementById("ip");
const showLocation = document.getElementById("location");
const showTimezone = document.getElementById("timezone");
const showIsp = document.getElementById("isp");
const BASE_URL =
  "https://ipgeolocation.abstractapi.com/v1/?api_key=16b6bdb2a0664fb086b7da92c362af63";

const up = document.getElementById("up");
const down = document.getElementById("down");
const dataContainer = document.getElementById("main-data-container");

window.onload = () => {
  // ===== MAP =====
  getData();
};


