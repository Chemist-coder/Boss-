document.getElementById("startButton").addEventListener("click", function () {
    document.body.classList.add("active");
    document.getElementById("main").classList.add("hidden"); // Hide the main div
    document.getElementById("content").classList.remove("hidden"); // Show the new content
    this.remove(); // Remove the button entirely
});
