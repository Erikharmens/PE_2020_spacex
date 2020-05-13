const historyUrl = "https://api.spacexdata.com/v3/history";

fetch(historyUrl)
    .then(function (response) {
        return response.json();
        console.log(response);
    })
    .then(function (json) {
        console.dir(json);

        const historyElement = document.querySelector(".historycontainer");

        let html = "";

        for (let i = 0; i < json.length; i++) {

            jsonLaunchDate = new Date(json[i].event_date_utc);

            const isoDateFixed = "" + jsonLaunchDate.getDate() + "/" + (jsonLaunchDate.getMonth() + 1) + "/" + jsonLaunchDate.getFullYear();



            html += `<div class="historycards">
                        <div class="historyDate">${isoDateFixed}</div>
                        <h2>${json[i].title}</h2>
                        <p>${json[i].details}</p>
                    </div>`

            historyElement.innerHTML = html;
        }


    });