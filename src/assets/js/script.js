lucide.createIcons();
hljs.highlightAll();

const burger = document.getElementById("burger");
const overlay = document.getElementById("overlay");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

burger.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});
