const express=require("express");
const bodyParser=require("body-parser");
var http = require("http");
// import { Novu } from '@novu/node'
// import { status } from 'express/lib/response';
// const Novu=require("@novu/node");
const app=express();

app.get("/",(req,res)=>{
res.send("hi");
});


// app.post("/notification",async(req,res)=>{
//    Novu("a5c1e5e93a6ef45e2c8ec1574cd6c7b4").trigger('Hello',
//   {
//     to: {
//       subscriberId: 'venki21122@gmail.com',
//       email: 'email@email.com',
//       firstName: 'John',
//       lastName: 'Doe',
//     },
//     payload: {
//       customVariables: 'Hello'
//     },
//   }
// );
// res.send("sucess");
// })
var http = require("http");
// var options = {
//   "method": "POST",
//   "hostname": [
//     "api",
//     "pushbots",
//     "com"
//   ],
//   "path": [
//     "3",
//     "push",
//     "transactional"
//   ],
//   "headers": {
//     "x-pushbots-appid": "a5c1e5e93a6ef45e2c8ec1574cd6c7b4",
//     "x-pushbots-secret": "oKgQaWO7kmEu",
//     "Content-Type": "application/json"
//   }
// };
 options={
  method:"POST",
  hostname:"https://api.pushbots.com/3/push/transactional",
  headers:{
    "x-pushbots-appid":"a5c1e5e93a6ef45e2c8ec1574cd6c7b4",
    "x-pushbots-secret": "oKgQaWO7kmEu",
  }
  
}

var req = http.request(options,function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ topic: 'transactional_notification',
  platform: 0,
  message: 
    { title: 'Notification title',
      body: 'Notification body',
      payload: { sound: 'siren.wav' } },
  recipients: { tokens: [ '7122D70D045D9D1ABEDEB84016E181C2E3B4D8DBA119F96945D2BC2C0D2FEDA0' ] } }));
req.end();

app.listen(3000,()=>{
  console.log("server started at port 3000");
})
