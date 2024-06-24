const userDiv = document.getElementById("user");
const generateButton = document.getElementById("generate");
const body = document.querySelector("body");

function fetchData() { 
    // Show spinner
    const spinner = generateButton.querySelector('.spinner');
    spinner.style.display = 'block';

    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const name = `${user.name.first} ${user.name.last}`;
            const image = user.picture.large;
            const email = user.email;
            const location = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
            const phone = user.phone;
            const age = user.dob.age;
            const gender = user.gender;

            // Change background color based on gender
            body.style.backgroundColor = gender === 'male' ? 'blue' : 'pink';

            // Update userDiv with fetched data
            userDiv.innerHTML = `
                <div class="card bg-white text-black rounded-lg p-4 shadow-lg">
                    <img src="${image}" alt="user" class="card-img-top rounded-full mx-auto">
                    <div class="card-body">
                        <h5 class="card-title text-xl font-bold">Name: ${name}</h5>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">Phone: ${phone}</p>
                        <p class="card-text">Gender: ${gender}</p>
                        <p class="card-text">Age: ${age}</p>
                        <p class="card-text">Location: ${location}</p>
                    </div>
                </div>`;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            userDiv.innerHTML = `<p class="text-red-500">Failed to load user data.</p>`;
        })
        .finally(() => {
            // Hide spinner
            spinner.style.display = 'none';
        });
}

generateButton.addEventListener("click", fetchData);
