route = (handle,pathname,response) ->
  console.log "Routing for pathname: " + pathname
  if `typeof handle[pathname] === 'function'`
    handle[pathname](response)
  else
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("404 Not Found")
    response.end()

exports.route = route
