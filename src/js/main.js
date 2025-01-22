function loadComponent(id, path) {
    fetch(path)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load components
loadComponent("menu-bar", "components/menu-bar.html");
loadComponent("hero-section", "components/hero-section.html");
loadComponent("pricing-section", "components/pricing-section.html");
loadComponent("middletext-section", "components/middletext-section.html");
loadComponent("faq-section", "components/faq-section.html");
loadComponent("footer", "components/footer.html");
