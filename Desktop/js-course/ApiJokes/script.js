// Get references to the joke element and the joke button
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

// Function to generate and display a joke
const generateJoke = () => {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Initialize a GET request to the Chuck Norris joke API
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    // Define what happens when the readyState changes
    xhr.onreadystatechange = function() {
        // Check if the request is complete
        if (this.readyState === 4) {
            // Check if the request was successful
            if (this.status === 200) {
                // Parse the JSON response
                const response = JSON.parse(this.responseText);
                // Display the joke in the joke element
                jokeEl.innerHTML = response.value;
            } else {
                // Log an error message if the request failed
                console.log('Error: ' + this.statusText);
                jokeEl.innerHTML = 'Something Went Wrong (Not Funny!!!)';
            }
        }
    };

    // Send the request
    xhr.send();
};

// Add an event listener to the joke button to call generateJoke on click
jokeBtn.addEventListener('click', generateJoke);

// Call generateJoke when the DOM content is loaded
document.addEventListener('DOMContentLoaded', generateJoke);
