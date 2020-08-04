

function getInsider() {

    const http = new XMLHttpRequest();

    http.open("GET", "getInsider");
    http.send();
    
    http.onload = () => {
        const obj = JSON.parse(http.responseText);

        var insider   = document.getElementById("insider");
        var author    = document.getElementById("author");
        var timestamp = document.getElementById("timestamp");

        console.log(timestamp)

        insider.innerHTML     = obj.value;
        author.innerHTML      = obj.author + ", " + obj.timestamp;

    }

}
