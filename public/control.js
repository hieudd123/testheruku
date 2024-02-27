var socket ;
$( document ).ready(function() {
     socket = io();
	console.log("ready");
		//socket.on('connect', function(){
		//	console.log('Client has connected to the server!');
		//});	
	
		//socket.on('disconnect', function(){
		//	console.log('The client has disconnected!');
		//});
	
		//socket.on('serverdata',(data)=>{
		//	console.log('serverdata',data);
		//});
		//socket.on('data',(data)=>{
		//	console.log('data',data);
		//})
});
