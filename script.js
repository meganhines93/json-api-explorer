window.addEventListener("load", function () {

 const fetchButton = document.getElementById("fetchButton");
    const postList = document.getElementById("postList");
    const error = document.getElementById("error");

    fetchButton.addEventListener("click", function () {

        postList.innerHTML = "Loading...";

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                return response.json();
            })
            .then(function (posts) {

                postList.innerHTML = "";

                posts.forEach(function (post) {
                    postList.innerHTML +=
                        "<h3>" + post.title + "</h3>" +
                        "<p>" + post.body + "</p>";
                });

            })
            .catch(function () {
                error.innerHTML = "Error loading posts.";
            });

    });


    const form = document.getElementById("postForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;

        message.innerHTML = "Loading...";

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (post) {
                message.innerHTML = "Post created! ID: " + post.id;
            })
            .catch(function () {
                message.innerHTML = "Error creating post.";
            });

    });

});