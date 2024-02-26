const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.render('index', {
      domain: domain
    });
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})