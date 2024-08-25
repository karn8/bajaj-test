document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postDataInput = document.getElementById('postData');
    const postResponseDiv = document.getElementById('postResponse');

    const getButton = document.getElementById('getButton');
    const getResponseDiv = document.getElementById('getResponse');

    const postEndpoint = 'https://singapore2278--bajaj-test-e54de.cloudfunctions.net/api/bfhl';
    const getEndpoint = 'https://singapore2278--bajaj-test-e54de.cloudfunctions.net/api/bfhl';

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const postData = postDataInput.value;

        fetch(postEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: postData,
        })
        .then(response => response.json())
        .then(data => {
            postResponseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            postResponseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    });

    getButton.addEventListener('click', function() {
        fetch(getEndpoint, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            getResponseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            getResponseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    });
});
