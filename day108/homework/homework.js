fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://goa-api.onrender.com/mentors/speed_count')
    .then(res => res.json())
    .then(json => console.log(json));