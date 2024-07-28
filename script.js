// Select all buttons
const buttons = document.querySelectorAll('.buttons');
// Select body
const body = document.querySelector("body");

// Select text elements and the <h4> element
const textElements = document.querySelectorAll('.text');
const h4Element = document.getElementById('h4');

// Define text for each color
const orangeText = "Kesari stands for courage and sacrifice.";
const whiteText = "Saphed stands for peace and truth.";
const greenText = "Hara represents faith and chivalry.";

// Iterate each button
buttons.forEach(function (button) {
    // Add click event listener
    button.addEventListener('click', function (e) {
        // Check which button was clicked and update styles and text accordingly
        if (e.target.id == 'orange') {
            body.style.backgroundColor = "#FF671F";
            textElements.forEach((element) => {
                element.style.color = 'black';
            });
            h4Element.textContent = orangeText; // Update <h4> text

        } else if (e.target.id == 'white') {
            body.style.backgroundColor = "white";
            textElements.forEach((element) => {
                element.style.color = 'black';
            });
            h4Element.textContent = whiteText; // Update <h4> text

        } else {
            body.style.backgroundColor = "#046A38";
            textElements.forEach((element) => {
                element.style.color = 'white';
            });
            h4Element.textContent = greenText; // Update <h4> text
        }
    });
});
