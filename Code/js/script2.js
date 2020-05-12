const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")){
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const baseUrl = "https://api.spacexdata.com/v3/launches/";
const upcomingRockets = `${baseUrl}upcoming/`;
const upcomingDetails = `${upcomingRockets}${id}`;


function handleResponse(response){
    return response.json();
}


function createDetails(details){
    console.log(details);

    const title = document.querySelector(".upcomingrocket");
    title.innerHTML = details.mission_name;
}


fetch(upcomingDetails)
    .then(handleResponse)
    .then(createDetails);