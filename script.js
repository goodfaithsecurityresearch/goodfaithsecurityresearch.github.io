// Get all elements with class "how-to"
const howToElements = document.querySelectorAll(".how-to");

// Function to toggle the visibility of how-to instructions
function toggleInstructions(id) {
    const element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

// Add click event listeners to each task to toggle the instructions
const tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
    task.addEventListener("click", function () {
        const checkbox = this.querySelector("input[type=checkbox]");
        checkbox.checked = !checkbox.checked;
        const id = checkbox.getAttribute("id");
        toggleInstructions(`instructions-${id}`);
    });
});

// Add an event listener to the whole document to handle clicks on task elements
document.addEventListener('click', function (event) {
    // Check if the clicked element is a task element
    if (event.target.matches('.task')) {
        // Get the next sibling of the clicked task element
        const howTo = event.target.nextElementSibling;

        // Check if the next sibling is a how-to element
        if (howTo && howTo.classList.contains('how-to')) {
            // Toggle the visibility of the how-to element
            howTo.classList.toggle('show-how-to');
        }
    }
});

