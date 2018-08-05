var express= require("express")
var bodyParser= require('body-parser')
var mysql =require('mysql')
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const http= require('http');

const PORT = process.env.PORT || 8080;

const handleRequest= function (request, response)
{
    response.end('its alive!!' +request.url)
}

const server= http.createServer(handleRequest)

server.listen(PORT, function(){
    console.log('the server is listening on port' + PORT)
});
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "quotes_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  