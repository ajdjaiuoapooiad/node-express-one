var express = require('express');

app = express();


app.get('/',function(req,res){
    res.send('Hello Express');
})

app.post('/about',function(req,res){
    res.send('Hello About');
})

app.get('/contact',function(req,res){
    res.send('Hello Contact');
})


app.listen(8000,function(){
    console.log('Server run success');
    
})
