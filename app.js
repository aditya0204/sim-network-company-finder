var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var request=require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
})


app.get("/result",(req,res)=>{

    
    var url="http://starlord.hackerearth.com/movieslisting";

    console.log(url);
  
    request(url,(error,response,body)=>{
        if(!error&&response.statusCode==200){
            var data =JSON.parse(body)
            res.render("result",{data:data});
        }
    })
  
})


app.listen(process.env.PORT || 5000,(err,res)=>{

   if(err){
       console.log("error occured while starting server");
   }
   else{
       console.log("server started");
   }



})