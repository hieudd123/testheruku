var socket = io("http://" + location.hostname +':80');
		socket.on('connect', function(){
			console.log('Client has connected to the server!');
		});	  
		socket.on('disconnect', function(){
			console.log('The client has disconnected!');
		});
