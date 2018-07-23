const express = require('express')
const app = express()

var port = 8080

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.render(index);  
})

app.listen(function() {
    console.log("App Running");
})
