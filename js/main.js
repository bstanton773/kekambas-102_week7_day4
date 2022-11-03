// console.log('Hello this is the main');

// Create a Block to limit our scope of variables
{
    // set the navbar to dark by replacing the word 'light' with 'dark' in className
    let navBar = document.querySelector('nav');
    navBar.className = navBar.className.replaceAll('light', 'dark');

    // Create an array for the colors
    let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    // Get the color buttons
    let colorButtons = document.querySelectorAll('.col-2 > button');
    // console.log(colorButtons);

    // Loop throught the buttons and apply button color to class name
    for (let i = 0; i < colorButtons.length; i++){
        // console.log(colorButtons[i], buttonColors[i]);
        colorButtons[i].className = `btn btn-${buttonColors[i]}`;
    };

    // Add a Header under the buttons in the container

    // First create the header
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader';
    newHeader.className = 'text-center mt-3';
    newHeader.innerHTML = 'Created by Brian with the help of JavaScript';

    // Get the row of buttons
    let allRows = document.getElementsByClassName('row');
    let buttonRow = allRows[0];

    // Add the new header AFTER the button row (vs appending to the end)
    buttonRow.after(newHeader);
}

