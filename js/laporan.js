const companyTabs = Array.from(document.querySelectorAll("[data-company-tab]"));
const companyPanels = Array.from(document.querySelectorAll("[data-company-panel]"));

function setCompanyTab(target) {
    companyTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.companyTab === target);
    });

    companyPanels.forEach((panel) => {
        panel.hidden = panel.dataset.companyPanel !== target;
    });
}

companyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        setCompanyTab(tab.dataset.companyTab);
    });

    tab.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setCompanyTab(tab.dataset.companyTab);
        }
    });
});

setCompanyTab("ioa");

function makeLink(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
        window.location.href = url;
    })
}

makeLink("#quiz-rpl", "/subbab/quiz-rpl.html");
makeLink("#cashier-app", "/subbab/cashier-app.html");
makeLink("#game-mario", "/subbab/game-mario.html");
makeLink("#game-flappy", "/subbab/game-flappy.html");
makeLink("#enviro-mas", "/projek/enviro-mas.html");
makeLink("#rocky", "/projek/rocky.html");
makeLink("#thichannel", "/projek/thichannel.html");

$('#slick-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// const hamburger = document.getElementById("hamburger");
// const navMenu = document.getElementById("nav-menu");

// if (hamburger && navMenu) {
//     hamburger.addEventListener("click", () => {
//         const isOpen = navMenu.classList.toggle("active");

//         hamburger.classList.toggle("active", isOpen);
//         hamburger.setAttribute("aria-expanded", String(isOpen));
//     });

//     navMenu.querySelectorAll("a").forEach((link) => {
//         link.addEventListener("click", () => {
//             navMenu.classList.remove("active");
//             hamburger.classList.remove("active");
//             hamburger.setAttribute("aria-expanded", "false");
//         });
//     });
// }
