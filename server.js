(function() {
  var http, start, url;
  http = require("http");
  url = require("url");
  start = function(route, handle) {
    return http.createServer(function(request, response) {
      var content, pathname;
      pathname = url.parse(request.url).pathname;
      console.log("Request Received for: " + pathname);
      return content = route(handle, pathname, response);
    }).listen(3000);
  };
  exports.start = start;
}).call(this);
