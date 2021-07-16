const express = require("express");

const app = express();
// app.set('trust proxy', true);
app.use(express.json())

app.use(function(request, response, next) {
  console.log("got request", request.url);
  next();
})

app.get("/", function(req, res) {
  res.send("landing page")
})

app.use(function(request, response) {
  response.status(404);
  response.send("Cannot answer this request");
})

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});