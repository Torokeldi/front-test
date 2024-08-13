document.addEventListener("DOMContentLoaded", function () {
    const clickImg = document.querySelector("#clickImg");
    const modal = document.querySelector("#modal");

    if (clickImg && modal) {
        clickImg.addEventListener("click", function () {
            modal.classList.add("open");
        });

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "close-btn";
        closeButton.innerHTML = "&times;";

        modal.appendChild(closeButton);

        closeButton.addEventListener('click', function () {
            modal.classList.remove('open');
        });

        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.classList.remove('open');
            }
        });
    }
});
