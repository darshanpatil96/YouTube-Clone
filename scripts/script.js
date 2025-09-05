// sidebar.js
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // search.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("input[type='text']");
  const videos = document.querySelectorAll(".video-title");

  searchInput.addEventListener("keyup", () => {
    let filter = searchInput.value.toLowerCase();
    videos.forEach(video => {
      let text = video.textContent.toLowerCase();
      video.closest(".video-card").style.display = text.includes(filter) ? "" : "none";
    });
  });
});
// darkmode.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙 Dark Mode";
  toggleBtn.classList.add("dark-toggle");
  document.querySelector(".middle-section").appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});

// Hover Preview for Thumbnails
document.querySelectorAll(".thumbnail").forEach(img => {
  img.addEventListener("mouseenter", () => {
    if (img.dataset.preview) img.src = img.dataset.preview;
  });
  img.addEventListener("mouseleave", () => {
    if (img.dataset.original) img.src = img.dataset.original;
  });
});



});
