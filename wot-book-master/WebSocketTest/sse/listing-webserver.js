var http = require("http");
var port = 8686;

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

http.createServer(function(req,res){
  console.log('New incoming client request for ' + req.url);
    //res.writeHeader(200, { 'Content-Type': 'application/json' }); //#A
    const contentType = req.headers['content-type'];

    switch (contentType) { //#B
        case 'application/json':
            res.writeHeader(200, { 'Content-Type': 'application/json' }); 
            break;
        case 'application/xml':
            res.writeHeader(200, { 'Content-Type': 'application/xml' });
            break;
        case 'text/html':
            res.writeHeader(200, { 'Content-Type': 'text/html' });
            break;
        case 'text/plain':
            res.writeHeader(200, { 'Content-Type': 'text/plain' });
            break;
        case "text/event-stream":
            res.writeHeader(200, {"Content-type":"text/event-stream",
                "Cache-Control":"no-cache",
                "Connection":"keep-alive",
                "Access-Control-Allow-Origin":"*"});
            break;    
        default:
            res.writeHeader(200, { 'Content-Type': 'text/plain' });
    }

    switch(req.url) { //#B
        case '/temperature':
            switch (contentType) { //#B
                case 'application/json':
                    res.write('{Temperature :' + randomInt(1, 40) + '}'); 
                    break;
                case 'application/xml':
                    res.write('<header>Temperature</header> <body>' + randomInt(1, 40) + '</body>');
                    break;
                case 'text/html':
                    res.write('<h2> Temperature:' + randomInt(1, 40) + '</h2>');
                    break;
                case 'text/plain':
                    res.write('Temperature :' + randomInt(1, 40));
                    break;
                case "text/event-stream":
                    var interval = setInterval(function (){
                        res.write("Temperature :" + randomInt(100,127) + "\n\n");
                    },2000);
                    break;    
                default:
                    res.write('{"Temperature" :' + randomInt(1, 40) + '}');
                    break;
            }
        break;
        default:
            res.write('{"hello" : "world"}');
    }
    
    res.end();  //#D
}).listen(port);
console.log('Server listening on http://localhost:' + port);


