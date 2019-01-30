// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

/*get {"ipaddress":"46.233.77.221","language":"es-ES,es;q=0.9,en;q=0.8,gl;q=0.7",
"software":"Mozilla/5.0 (Linux; Android 8.0.0; BAH2-W19) AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/71.0.3578.99 Safari/537.36"}*/
app.get('/api/whoami', function(req, res){  
  const ip = req.ip;
  const language = req.headers['accept-language'];
  const systemInfos = req.headers['user-agent'];
  console.log(ip);
  console.log(language);console.log(systemInfos);
  res.json({ipaddress: ip, language: language, software: systemInfos});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});