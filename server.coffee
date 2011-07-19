http = require("http")
url  = require("url") 

start = (route,handle) ->
    http.createServer((request, response) -> 
        pathname = url.parse(request.url).pathname
        console.log "Request Received for: " + pathname

        content = route(handle,pathname,response)
    ).listen(3000)

exports.start = start
