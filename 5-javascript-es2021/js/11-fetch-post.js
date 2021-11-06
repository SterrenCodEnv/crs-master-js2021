let nuevoPost = JSON.stringify({
    title: 'Titulo de nuevo post',
    body: 'Ullamco sit nostrud nisi minim eiusmod. Dolore consequat incididunt laboris esse. Pariatur cupidatat voluptate magna Lorem velit consequat ullamco aliquip nulla Lorem culpa magna velit. Tempor officia voluptate mollit anim excepteur culpa. Esse do adipisicing tempor sint enim deserunt sit Lorem. Ad nostrud exercitation non mollit magna ad aute minim ea velit dolore tempor fugiat. Ipsum mollit commodo fugiat in.',
    userId: 300
});

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: nuevoPost,
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));