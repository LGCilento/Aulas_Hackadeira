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
            // And return the corresponding JSON
            res.writeHeader(200, { 'Content-Type': 'application/json' }); //#C
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
        default:
            res.writeHeader(200, { 'Content-Type': 'text/plain' });
    }

    switch(req.url) { //#B
        case '/temperature':
            switch (contentType) { //#B
                case 'application/json':
                    res.write('{"Temperature" :' + randomInt(1, 40) + '}'); 
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
                default:
                    res.write('{"Temperature" :' + randomInt(1, 40) + '}');
                    break;
            }
        //res.write('{"temperature" :' + randomInt(1, 40) + '}'); //#C
        break;
        case '/light':
            switch (contentType) { //#B
                case 'application/json':
                    res.write('{"Light" :' + randomInt(1, 100) + '}'); 
                    break;
                case 'application/xml':
                    res.write('<header>Light</header> <body>' + randomInt(1, 100) + '</body>');
                    break;
                case 'text/html':
                    res.write('<h2> Light:' + randomInt(1, 100) + '</h2>');
                    break;
                case 'text/plain':
                    res.write('Light :' + randomInt(1, 100));
                    break;
                default:
                    res.write('{"Light" :' + randomInt(1, 100) + '}');
                    break;
            }
            //res.write('{"light" :' + randomInt(1, 100) + '}');
            break;
        case '/humidity':
            switch (contentType) { //#B
                case 'application/json':
                    res.write('{"Humidity" :' + randomInt(1, 100) + '}');
                    break;
                case 'application/xml':
                    res.write('<header>Humidity</header> <body>' + randomInt(1, 100) + '</body>');
                    break;
                case 'text/html':
                    res.write('<h2> Humidity:' + randomInt(1, 100) + '</h2>');
                    break;
                case 'text/plain':
                    res.write('Humidity :' + randomInt(1, 100));
                    break;
                default:
                    res.write('{"Humidity" :' + randomInt(1, 100) + '}');
                    break;
            }
            break;
        default:
            res.write('{"hello" : "world"}');
    }
    
    res.end();  //#D
}).listen(port);
//console.log(res.headers['content-type']);
console.log('Server listening on http://localhost:' + port);

//#A Setting the header to announce we return JSON representations
//#B Read the request URL and provide responses accordingly
//#C Write the temperature result as JSON
//#D Causes to return the results to the client

