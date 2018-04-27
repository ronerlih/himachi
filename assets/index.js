// alert("test");
let queryURL = "https://api.yelp.com/v3/";
let locationString;
let radiusString;
const apiKey = "FgZBs20tjsYC_v7EvCVhZnNXaiVbwT_BadAn0CixIMitxQC2DHSOIqsDaoKseup4EHSa463VVLHuVZWcSosQiOw-SrIzxc9RwFjEI8b9-F1tBqHZofGN5bQKmYniWnYx";
const clientID = "DmyVwVKi11yL3xL0bZ_c-Q";

console.log("test");

$(document).ready(function() {
    console.log("JS Loaded");
    buttonClick();
})


function buttonClick() {
    $("#search-btn").on("click", function(req, res) {
        event.preventDefault();
        console.log("test");
        console.log(req.body.location);
    });
}

// Insert ajax call hereop

// yelp API?
// $.ajax({
//     method: "GET",
//     url: queryURL
// }).then(function(res, req) {
//     console.log(res)
// })


// return to DOM

