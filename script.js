document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.onscroll = function () {
        // Change the background color of the navigation bar when scrolling
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    };
});