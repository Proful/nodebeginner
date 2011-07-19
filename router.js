(function() {
  var route;
  route = function(handle, pathname, response) {
    console.log("Routing for pathname: " + pathname);
    if (typeof handle[pathname] === 'function') {
      return handle[pathname](response);
    } else {
      response.writeHead(200, {
        "Content-Type": "text/plain"
      });
      response.write("404 Not Found");
      return response.end();
    }
  };
  exports.route = route;
}).call(this);
