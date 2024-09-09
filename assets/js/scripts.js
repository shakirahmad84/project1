jQuery(document).ready(function($) {

    // YOUTUBE VIDEO
    $('.video-container').on('click', function(ev) {
        var youtubeId = $(this).find('img').data('youtube');
        console.log(youtubeId);
        $(this).find('img').fadeOut('slow');
        $(this).find('.play-svg').fadeOut('slow');

        var iframe = document.createElement("iframe");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframe.setAttribute("src", youtubeId + "?rel=0&controls=1&showinfo=0&autoplay=1");
        this.innerHTML = "";
        this.appendChild(iframe);
    });



});



    // POPUP 
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popup-container");
    const closeButton = document.getElementById("close-button");
    const overlay = document.querySelector(".popup-overlay");

    // Show the popup when the page has finished loading
    popupContainer.style.display = "block";

    // Close the popup when the close button is clicked
    closeButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });

    // Close the popup when the overlay is clicked
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            popupContainer.style.display = "none";
        }
    });
});
