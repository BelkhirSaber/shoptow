"use strict";
const sidebar = document.querySelector(".sidebar");
const icon = sidebar.querySelector("#expand-sidebar i");

document.querySelector("#open-sidebar").addEventListener("click", () => {
  sidebar.classList.add("open");
});

document.querySelector("#close-sidebar").addEventListener("click", () => {
  sidebar.classList.remove("open");
});

document.querySelector("#expand-sidebar").addEventListener("click", () => {
  sidebar.classList.toggle("expand");

  if (sidebar.className.includes("expand")) {
    icon.classList.remove("bx-menu-alt-left");
    icon.classList.add("bx-menu-alt-right");
  } else {
    icon.classList.remove("bx-menu-alt-right");
    icon.classList.add("bx-menu-alt-left");
  }
});
