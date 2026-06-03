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

makeLink("#enviro", "http://enviromas.com/");
makeLink("#rocky", "https://sandbox.rockyfastcruise.com/");
makeLink("#thichannel", "https://thichannel.com/en/home-english/");