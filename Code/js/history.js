// Base url for API
const historyUrl = "https://api.spacexdata.com/v3/history";

// Fetching json data then handle response
fetch(historyUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {

        const historyElement = document.querySelector(".historycontainer");

        let html = "";

        // Loop through data in array
        for (let i = 0; i < json.length; i++) {

            jsonLaunchDate = new Date(json[i].event_date_utc);

            // Adjusting the display launch date format 
            const isoDateFixed = "" + jsonLaunchDate.getDate() + " / " + (jsonLaunchDate.getMonth() + 1) + " / " + jsonLaunchDate.getFullYear();

            html += `<div class="historycards">
                        <div class="historyDate">${isoDateFixed}</div>
                        <h1 class="historyTitle">${json[i].title}</h1>
                        <p>${json[i].details}</p>
                    </div>`

            historyElement.innerHTML = html;
        }
    });