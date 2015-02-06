var http = require('http');
var messages = [];
var port = 10000;

var onRequest = function (req, res) {
  console.log(req.method)
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    res.end(JSON.stringify(messages))
  }
  if (req.method === 'POST') {
    var postData = '';
    req.on('data', function(chunk) {
      postData += chunk.toString();
    });  
    req.on('end', function() {
      console.log("Got POST data:");
      var message = (JSON.parse(postData));
      message.timeStamp = new Date().toISOString();
      messages.push(message);
      
      res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
      res.end(JSON.stringify(message));
    }); 
  }
  if ( req.method === 'OPTIONS') {
    res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    res.end()
  }
    

  
};

http.createServer(onRequest).listen(port);