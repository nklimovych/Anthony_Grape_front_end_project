(function () {
    const burgerButton = document.querySelector(".header__burger-menu");
    const navigationsBody = document.querySelector(".header__menu-container");
    burgerButton.addEventListener("click", function (e) {
        document.body.style.overflow = "hidden";
        burgerButton.classList.toggle("active");
        navigationsBody.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".header__menu-item");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (burgerButton.classList.contains("active")) {
                document.body.style.overflow = "auto";
                burgerButton.classList.remove("active");
                navigationsBody.classList.remove("active");
            }
        });
    });

    burgerButton.addEventListener("click", (_) => {
        if (!burgerButton.classList.contains("active")) {
            document.body.style.overflow = "auto";
        }
    });
})();