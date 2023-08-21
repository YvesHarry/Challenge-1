document.addEventListener("DOMContentLoaded", function() {
    const btnSearch = document.getElementById("btn-search");
    const mainElem = document.querySelector("main");

    // Show the main content when the search button is clicked
    btnSearch.addEventListener("click", function(e) {
        e.preventDefault(); // Prevents the form from submitting
        mainElem.classList.remove("hidden");
    });

    // Initialize the collapsible elements from Materialize
    var collapsibleElems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibleElems);

    // Initialize the card elements from Materialize
    var cardElems = document.querySelectorAll('.card');
    M.Collapsible.init(cardElems);
});
