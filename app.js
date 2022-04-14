var http = require('http'); 

const PORT = 3000; //! Порт по кторому подключвемся
const IP = '192.168.0.105'; //* Айпи
//TODO: Сделать автоматическое определение IP адреса

const server = http.createServer(function (request, response) {
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Server was created succsesfully' + request.url);

});
server.listen(PORT, IP, function() {
    console.log(`IP:${IP} listening port:${PORT}`);
});