const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.render('index', {
      domain: domain
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})