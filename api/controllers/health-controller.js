exports.pingGET = function(args, res, next) {
  var response = { message: "I'm fine!" };
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};
