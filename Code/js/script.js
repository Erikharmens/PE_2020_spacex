const spacexApiUrl = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(spacexApiUrl)
    .then(function (response) {
        return response.json();
        // console.dir(response);
    })
    .then(function (json) {
        console.dir(json);

        const countdownElement = document.querySelector(".countdowntimer");

        let html = "";

        // Get correct next launch date to use for compare inside loop under
        correctNextLaunchDate = getCorrectNextLaunchDate(json);

        // Loops again through spacexdata json
        for (let i = 0; i < json.length; i++) {
            // Creates a Date object of current index launch date
            jsonLaunchDate = new Date(json[i].launch_date_local);

            // If this date is the same as the correct date we found above, 
            if (jsonLaunchDate.getTime() == correctNextLaunchDate.getTime()) {

                // Creates a string to get a cusomised date preview instead of showing the ISO date
                const isoDateFixed = "" + jsonLaunchDate.getDate() + " / " + (jsonLaunchDate.getMonth() + 1) + " / " + jsonLaunchDate.getFullYear();

                // Add to HTML
                html += `<div class="countdowntimer">
                            <h4>Next SpaceX Launch:</h4>
                            <a class="linkToWeb" alt="Launch Schedule" href="https://spaceflightnow.com/launch-schedule">
                                <h1 class="upcomingrocket">${json[i].mission_name}</h1>
                            </a>
                             <h4>Estimated launch date:</h4>
                             <h5 class="rockettimer">${isoDateFixed}</h5>
                        </div>`

                countdownElement.innerHTML = html;
            }
        }
    });


function getCorrectNextLaunchDate(json) {
    // Create emtpy array.
    const datesArr = [];

    // Loop through spacexdata json and add the launch dates (in Date format) in that array
    for (let i = 0; i < json.length; i++) {
        datesArr.push(new Date(json[i].launch_date_local));
    }

    // Sort the array to get the oldes dates first
    const sortedDatesArr = datesArr.sort((a, b) => a - b)

    // Get today's date
    const todayDate = new Date();

    // Create empty variable to add correct next launch date
    let correctNextLaunchDate;

    // Loop through the sorted array of launch dates (starting with the oldest dates)
    for (let i = 0; i < sortedDatesArr.length; i++) {
        // If today's date is less than the current index of the sorted dates array,
        // set the variable correctNextLaunchDate to this date, and exit loop.
        if (todayDate < sortedDatesArr[i]) {
            correctNextLaunchDate = sortedDatesArr[i];
            break;
        }
    }
    return correctNextLaunchDate;
}