
function showMorePlaces(section) {
    const morePlaces = document.querySelector(`#${section} .more-places`);
    const button = document.querySelector(`#${section} .button`);
    if (morePlaces.style.display === "none") {
        morePlaces.style.display = "block";
        button.innerHTML = "Show Less Places";
    } else {
        morePlaces.style.display = "none";
        button.innerHTML = "Show More Places";
    }
}
