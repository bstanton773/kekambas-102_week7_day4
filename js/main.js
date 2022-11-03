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
    // console.log(form);

    // Create a function to handle submit event
    async function handleSubmit(e){
        e.preventDefault(); // Prevent the event from refreshing the page
        // console.log(e);
        let countryName = e.target.countryName.value;
        // console.log(countryName);
        let countryInfo = await getCountryInfo(countryName);
        buildCountryCard(countryInfo);
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

    // Function that will take in a country object and build an HTML card and append to the country Display
    function buildCountryCard(countryObj){
        // Create a card div
        let card = document.createElement('div');
        card.className = 'card h-100';

        // Create a top image
        let image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = countryObj.flags.png;
        // Add image as a child to the card div
        card.append(image);

        // Create card body
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Create country name and population elements
        let countryTitle = document.createElement('h5');
        countryTitle.className = 'card-title';
        countryTitle.innerHTML = countryObj.name.official;

        let countryPopulation = document.createElement('p');
        countryPopulation.className = 'card-text';
        countryPopulation.innerHTML = `Population: ${countryObj.population.toLocaleString('en-US')}`;

        // Add title and population to the card body
        cardBody.append(countryTitle);
        cardBody.append(countryPopulation);

        // Add the card body to the card
        card.append(cardBody);

        // Create a column for the row
        let col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3 my-3';

        // Add the card as a child to the columnd
        col.append(card);

        // Get the country display row and add the column
        let display = document.getElementById('countryDisplay');
        display.append(col);
    }
    
    // Add handleSubmit function to the form as a listener to the submit event
    form.addEventListener('submit', handleSubmit);
}

// Add autocomplete
{
    let formInput = document.querySelector("#countryName");

    formInput.addEventListener('input', async (e) => {
        console.log(e)
        console.log(e.target.value)
        let res = await fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
        let data = await res.json()
        // console.log(data);
        let countries = document.createElement('ul');
        for (let country of data){
            console.log(country.name.official);
            c = document.createElement('li');
            c.innerHTML = country.name.official;
            countries.append(c);
        };
        let form = document.getElementById('countryForm');
        form.after(countries);
    })
}
