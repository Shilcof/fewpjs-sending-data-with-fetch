// Add your code here
function submitData(name, email) {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };
    return fetch("http://localhost:3000/users", configObject)
        .then(function(responce) { 
            return responce.json();    
        })
        .then(function(object) {
            appendToBody(object["id"]);
        })
        .catch(function(error) {
            appendToBody(error.message);
        });
}

function appendToBody(message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    document.querySelector('body').append(messageDiv);
}