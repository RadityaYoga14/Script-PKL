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

makeLink("#quiz-rpl", "subbab/quiz-rpl.html");
makeLink("#cashier-app", "subbab/cashier-app.html");
makeLink("#game-mario", "subbab/game-mario.html");
makeLink("#game-flappy", "subbab/game-flappy.html");
makeLink("#enviro-mas", "projek/enviro-mas.html");
makeLink("#rocky", "projek/rocky.html");
makeLink("#thichannel", "projek/thichannel.html");

$(document).ready(function(){
    var $carousel = $('.slider-projek-carousel');

    if (!$carousel.length || $carousel.hasClass('slick-initialized')) {
        return;
    }

    var $slides = $carousel.children('.P-slide');

    if ($slides.length > 0 && $slides.length < 50) {
        var targetCount = 50;
        var currentCount = $slides.length;

        while (currentCount < targetCount) {
            $slides.clone().addClass('P-slide-clone').appendTo($carousel);
            currentCount += $slides.length;
        }
    }

    $carousel.slick({
        centerMode: true,
        centerPadding: '260px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 650,
        cssEase: 'cubic-bezier(0.22, 1, 0.36, 1)',
        focusOnSelect: true,
        waitForAnimate: true,
        prevArrow: '<button type="button" class="slick-prev-custom project-arrow" aria-label="Previous"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next-custom project-arrow" aria-label="Next"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '160px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '36px'
                }
            }
        ]
    });
});