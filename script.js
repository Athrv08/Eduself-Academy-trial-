document.addEventListener("DOMContentLoaded", function() {
    let loader = document.querySelector(".atomic-loader");

    loader.style.visibility = "visible";

    setTimeout(() => {
        loader.style.visibility = "hidden";
    }, 1000);
});
