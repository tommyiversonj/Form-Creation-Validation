// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch and parse data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 7: Append the list to container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 8: Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 9: Run fetchUserData after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
