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


//-------------------SOCKET IO SERVER-----------------

io.on('connection', (socket) => {
    console.log('New connection')
    socket.on('data',(data)=>{
        console.log(`Clent gui`,data);
       io.emit('data',data);
    });
     socket.on('disconnect', () => console.log('Client disconnected'));
})

//---------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
setInterval(()=>{
    let randomInt = getRandomInt(10);
    console.log("setInterval: "+randomInt);
   io.emit("serverdata",""+randomInt); 
},2000);
//---------------LANG NGHE -------------
server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
// -----------MQTT-----------
const mqtt = require("mqtt");
const mqttclient = mqtt.connect("mqtt://test.mosquitto.org");

mqttclient.on("connect", () => {
  mqttclient.subscribe("herokutest", (err) => {
    if (!err) {
      mqttclient.publish("herokutest", "Hello mqtt");
    }
  });
});

mqttclient.on("message", (topic, message) => {
  // message is Buffer
    io.emit("serverdata",{topic:topic,message:message} ); 
  console.log(message.toString());
  //mqttclient.end();
});
