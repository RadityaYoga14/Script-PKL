const video = document.getElementById('myVideo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.3 
});

observer.observe(video);

function makeLink(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
        window.open(url, "_blank");
    })
}

makeLink("#cashier-app", "https://appkasir.netlify.app/");
makeLink("#quiz-app", "https://quiz-rpl.netlify.app/");