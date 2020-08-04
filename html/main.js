

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



function toggleAllInsider() {
    const http = new XMLHttpRequest();

    http.open("GET", "allInsider");
    http.send();
    
    http.onload = () => {
        const obj = JSON.parse(http.responseText);

        var insiderTable = document.getElementById("insiderTable");
        var tButton = document.getElementById("toggleInsider");

        if(insiderTable.style.display == "" || insiderTable.style.display == "none") {
            obj.forEach(row => {
                var rowT = insiderTable.insertRow(1);

                var insider   = rowT.insertCell(0);
                var author    = rowT.insertCell(1);
                var timestamp = rowT.insertCell(2);

                insider.innerHTML   = row.value;
                author.innerHTML    = row.author;
                timestamp.innerHTML = row.timestamp;
            });

            insiderTable.style.display = "block";
            tButton.innerHTML = "Alle Insider verstecken"
        }
        else {

            var rowsL = insiderTable.rows.length;

            for(var i = rowsL - 1; i >= 1; i--) {
                console.log(insiderTable.rows[i]);
                insiderTable.deleteRow(i);
            }

            insiderTable.style.display = "none";
            tButton.innerHTML = "Alle Insider anzeigen"
        }

    }


}