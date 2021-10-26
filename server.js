// import modules
import express from "express"
// import { find } from "./data/fed-holidays.js"
import * as fedholidayDb from "./data/fed-holidays.js"

// Create Express app
const app = express()

// Configure the app (app.set)
app.set("view engine", "ejs")

// Mount routes
app.get("/home", function(req, res) {
  res.render("home")
})

app.get("/fedholidays", function (req, res) {
  fedholidayDb.find({}, function(error, fedHolidays) {
    res.render("holidays/index", {
      fedHolidays: fedHolidays,
      error: error
    })
  })
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log("Listening on port 3000")
})