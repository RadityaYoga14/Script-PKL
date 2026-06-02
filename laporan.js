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

const div = document.querySelector("quiz-rpl")
div.style.cursor = "pointer";
div.addEventListener("click", () => {
    window.location.href = ""
})
