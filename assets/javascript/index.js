// Yelp API
var proxyURL = "https://shielded-hamlet-43668.herokuapp.com/";	
let queryURL = "https://api.yelp.com/v3/businesses/search?term=japanese&location=";
let locationString;
let radiusString;
const apiKey = "nRFpFFodXZb24Nyj43Jm52pW5I0A-Wr1-OIh5qYV0er3_5y5TymJViOTGw-Mkam10P_rTdz5BmElL6gyXFA-0EIQMjiEpPDiOx8TEtmWsJd-Amvn8kSE5QAdYj_kWnYx";
const yelpHeader = {
        Authorization: "Bearer" + apiKey,
        "x-requested-with": "xhr" 
    }
let queryRadius;

// CORS workaround
// jQuery.ajaxPrefilter(function(options) {
//     if (options.crossDomain && jQuery.support.cors) {
//         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
// });

// Giphy API
const giphyURL = "https://api.giphy.com/v1/gifs/search?q=";
const giphyKey = "&api_key=7iTN9a5mRC8ErnBPIM5rfasmMZbOOUnP";

// Array of japanese foods for giphy api!
const jFood = ["Sushi", "Udon", "Teriyaki", "Ramen", "Sashimi"];

// Loads when the document is completely rendered
$(document).ready(function() {
    giphy();
    buttonClick();
})

// Giphy API Logic
function giphy() {
    for(let i = 0; i < 3; i++) {
        let randNum = Math.floor(Math.random() * jFood.length)
        // console.log(randNum);
        let randWord = jFood[randNum];
        console.log(randWord);
        $.ajax({
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: giphyURL + randWord + giphyKey
        }).then(function(req, res) {

            let newRandNum = Math.floor(Math.random() * 3)
            // console.log(req.data[0].images.original.url);
            let image = req.data[newRandNum].images.original.url;
            
            let htmlStuff = "<div class='gif-image'>"
                            +"<img src=" 
                            + '"' 
                            + image 
                            + '"' 
                            + ">"
                            + "</div>";

            $(".random-gif-" + i).append(htmlStuff);
        });
    }
}

// Logic for what happens when the user hits the submit button
function buttonClick() {
    $("#search-btn").on("click", function() {
        event.preventDefault();
        let locationValue = $("#location-input").val();
        console.log(locationValue);
        yelpCall();
    });
}


// Insert ajax call hereop

// yelp API?
function yelpCall() {
    $.ajax({
        method: "GET",
        "crossDomain": true,
        headers: yelpHeader,
        "async": true,
        url: proxyURL + queryURL + locationValue
    }).then(function(res, req) {
        console.log(req)
    })
};


