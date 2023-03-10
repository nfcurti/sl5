const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/'));

router.get('/',function(req,res){
  res.sendFile('index.html');
});
 
 
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
 
console.log('Running at Port 3000');