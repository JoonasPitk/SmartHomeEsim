// WEB SERVER FOR ELECTRICITY USAGE PLANNING: WEB PAGES AND AN API
// ==============================================================


// LIBRARIES AND MODULES
// Use Express as web engine.
const express = require("express");
// Use Express Handlebars as template engine.
const {engine} = require("express-handlebars");


// EXPRESS APPLICATION SETTINGS
// Create the server.
const app = express();
const PORT = process.env.PORT || 8080;

// Set folder paths: public is for assets and views for pages.
app.use(express.static("public"));
app.set("views", "./views");

// Engine settings.
app.engine("handlebars", engine());
app.set("view engine", "handlebars");


// URL ROUTES

// TODO: Add date and time as dynamic data for the homepage. Is it sensible to use server for creating time values?

app.get("/", (req, res) => {
    let homePageData = {
        "price": 31.25, 
        "wind": 2,
        "temperature": 18,
    };

    // Render index.handlebars and send dynamic data to the page.
    res.render("index", homePageData)
});

// Route to hourly data page.
app.get("/hourly", (req, res) => {

    // Data presented in a table. 
    let hourlyPageData = { "tableData": [
        {"hour": 0,
        "price": 5.03},
        {"hour": 1,
        "price": 4.55},
        {"hour": 2,
        "price": 3.03},
        {"hour": 3,
        "price": 3.04},
        {"hour": 4,
        "price": 3.45},
        {"hour": 5,
        "price": 4.04},
        {"hour": 6,
        "price": 4.43},
        {"hour": 7,
        "price": 6.07},
        {"hour": 8,
        "price": 9.50},
        {"hour": 9,
        "price": 13.67},
        {"hour": 10,
        "price": 15.43},
        {"hour": 11,
        "price": 18.66},
        {"hour": 12,
        "price": 18.03},
        {"hour": 13,
        "price": 19.55},
        {"hour": 14,
        "price": 16.99},
        {"hour": 15,
        "price": 16.09},
        {"hour": 16,
        "price": 17.80},
        {"hour": 17,
        "price": 18.87},
        {"hour": 18,
        "price": 20.59},
        {"hour": 19,
        "price": 19.99},
        {"hour": 20,
        "price": 19.45},
        {"hour": 21,
        "price": 19.03},
        {"hour": 22,
        "price": 15.04},
        {"hour": 23,
        "price": 10.06},
    
    ]};
    res.render("hourly", hourlyPageData)
});


// START THE LISTENER
app.listen(PORT);
console.log("Server started and it will listen TCP port", PORT);
