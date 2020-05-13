const historyUrl = "https://api.spacexdata.com/v3/history";

fetch(historyUrl)
    .then(function(response){
        return response.json();
        console.log(response);
    })
    .then(function(json){
        console.dir(json);

        const historyElement = document.querySelector(".historyCards");
        
        let html = "";

        for (let i = 0; i < json.length; i++){

            html += `<div class="historyCards">
                        <p>${json[i].event_date_utc}</p>
                        <h2>${json[i].title}</h2>
                        <p>${json[i].details}</p>
                    </div>`

            historyElement.innerHTML = html;
        }


    });
