async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        users.forEach(user => {
        console.log(user.name);
        });
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }
}

async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Oops! Something went wrong while fetching the data:", error.message);
    }
}

async function fetchWithRetry(url, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
        } catch (error) {
        console.warn(`Attempt ${attempt} failed: ${error.message}`);
        if (attempt === retries) {
            throw new Error('All fetch attempts failed.');
        }
        }
    }
}

async function fetchPostAndAuthor() {
    try {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await postsResponse.json();
        if (posts.length === 0) {
        console.log("No posts found.");
        return;
        }
        const firstPost = posts[0];
        console.log("First Post:", firstPost);
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstPost.userId}`);
        const user = await userResponse.json();
        console.log("Author of the first post:", user.name);
    } catch (error) {
        console.error("Error during sequential fetch:", error.message);
    }
}

fetchUserData();
fetchWithErrorHandling();
fetchWithRetry('https://jsonplaceholder.typicode.com/posts')
.then(data => console.log('Fetched successfully:', data))
.catch(error => console.error('Final Error:', error.message));
fetchPostAndAuthor();