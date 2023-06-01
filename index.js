var express = require ('express');
var app = express();
var path = require ('path');
var port =3000;

app.use(express.json());
//app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/views'));


var userdata = [{
    "firstName": "mani",
    "lastName" : "selvam",
    "id": "880694",
    "company":"cts"
},
{
    "firstName": "santhosh",
    "lastName" : "kumar",
    "id": "735890",
    "company":"cts"
}]
// step 1
// app.get('/api/fetch', (req,res)=>{
// res.send("first simple fetch text");
// });
//  step 2
// app.get('/api/fetch', (req,res)=>{
//     res.send({
//         statuscode : 200,
//         message: "succesfully fetched"
//     });
//     });

app.get('/api/fetch', (req,res)=>{
    let data = userdata.filter((val)=> val.id === req.query.id);
    //let data = userdata.filter((val)=> val.id === req.params.id);
        res.send(`<html>
        <body>
        <iframe allowfullscreen width="100%" height="100%" src="https://freeflix-api.vercel.app/jijoi895?client=223"> 
        </iframe>
        </body>
        </html>`);
        });

app.post('/api/userdata', (req,res)=>{
    try{
        if(Object.keys(req?.body || {}).length){
            let data = userdata.find((val)=> val.firstName === req.body.firstName.toString())
            res.send(data);
        }else{
            res.statusCode(400).send({
                statuscode : 400,
                message : "Bad request"
            });
        }
        res.send();
    }
    catch(err){
    res.send({
        error : "Oops! somthing went wrong" 
    })
    }
});
    
app.get('/api/html', (req,res)=>{
res.sendFile(path.join(__dirname,'views','index.html'));
});
app.listen(process.env.PORT || port);