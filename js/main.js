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
    newHeader.style.color = 'black';

    // Get the row of buttons
    let allRows = document.getElementsByClassName('row');
    let buttonRow = allRows[0];

    // Add the new header AFTER the button row (vs appending to the end)
    buttonRow.after(newHeader);
};

// Create a new scope
{
    // Get the new header that we created
    let myHeader = document.getElementById('myHeader');
    // console.log(myHeader);

    // Create our listener function - function to be executed when our event triggers
    function handleHeaderEvent(event){
        // console.log(event);
        let elementToChange = event.target;
        // console.log(elementToChange);
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'red';
        } else {
            elementToChange.style.color = 'black';
        };
    };

    // Add the handleHeaderEvent function as an event listener on the header
    myHeader.addEventListener('mouseover', handleHeaderEvent);

};

// Add event listeners for our buttons
{
     // Create an array for the colors
     let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

     // Get the color buttons
     let colorButtons = document.querySelectorAll('.col-2 > button');

     for (let i = 0; i < colorButtons.length; i++){
        let button = colorButtons[i];
        let color = buttonColors[i];
        button.addEventListener('click', () => {
            let body = document.body;
            body.className = `bg-${color}`
        });
     };
};

// Get the country name from the form and display on the page
{
    // Grab the form
    let form = document.getElementById('countryForm');
    console.log(form);

    // Create a function to handle submit event
    async function handleSubmit(e){
        e.preventDefault(); // Prevent the event from refreshing the page
        // console.log(e);
        let countryName = e.target.countryName.value;
        // console.log(countryName);
        let countryInfo = await getCountryInfo(countryName);
        console.log(countryInfo);
        console.log(typeof countryInfo);

        // Clear the input of the country name
        e.target.countryName.value = '';
    }

    // Function that takes in a country name, makes the request to the API, and returns a JavaScript object
    async function getCountryInfo(countryName){
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        // console.log(response)
        let data = await response.json()
        // console.log(data[0]);
        return data[0]
    }
    
    // Add handleSubmit function to the form as a listener to the submit event
    form.addEventListener('submit', handleSubmit);
}
