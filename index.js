const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.render('index', {
      domain: domain
    });
  });
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

//-------------------SOCKET IO SERVER-----------------

io.on('connection', (socket) => {
    console.log('New connection',socket)
    socket.on('data',(data)=>{
       io.emit('data',data) 
    });
})

//---------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
setInterval(()=>{
   io.emit("serverdata",getRandomInt(10)); 
},2000);
