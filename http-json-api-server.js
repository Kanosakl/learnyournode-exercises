const http = require('http');
const url = require('url');
const datefns = require('date-fns');

const PORT = process.argv[2];
const SERVER = http.createServer(listener);
SERVER.listen(PORT);

const ROUTES = {};
ROUTES['/parsetime'] = parseTimeRouteHandler;
ROUTES['/unixtime'] = unixTimeRouteHandler;

function listener(request, response){
    // console.log(request.url, typeof request.url);
    let urlObj = url.parse(request.url);
    let responseJSON = null;
    // console.log(urlObj);
    const inputISOTime = urlObj.query.split('=')[1];
    const dateFNSTime = parseTime(inputISOTime);


    const pathname = urlObj.pathname.substring(urlObj.pathname.lastIndexOf('/'));
    if(ROUTES[pathname]){
        responseJSON = ROUTES[pathname](dateFNSTime);
        
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
    }

    response.write(JSON.stringify(responseJSON));
    response.end();
}

function parseTime(time){
    return datefns.parseISO(time);
}

function parseTimeRouteHandler(dateFNSTime){
    return {
        hour: dateFNSTime.getHours(),
        minute: dateFNSTime.getMinutes(),
        second: dateFNSTime.getSeconds()
    }
}

function unixTimeRouteHandler(dateFNSTime){
    return {
        unixtime: dateFNSTime.getTime()
    }
}