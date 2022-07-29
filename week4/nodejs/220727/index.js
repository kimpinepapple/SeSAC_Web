const express = require('express');
const app = express();
const port = 8080; 
const bodyParser = require("body-parser");
const fs = require("fs");

app.set( "view engine", "ejs" );
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() ); 

app.get("/", function(req,res) {
    res.render("prc32-1");
})

app.get("/receive", function(req, res) {
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + "GET 안녕"
    res.send({name: name, message: msg});          
});

app.post('/receive', function(req, res){
    let string = fs.readFileSync("./newinfo/info.txt").toString();
    let strArray = string.split("//")
    let ID = req.body.ID;
    let PW = req.body.PW;
    let NAME = req.body.NAME;
    if (ID === strArray[0] && PW === strArray[1] && NAME === strArray[2]) {
        //로그인 성공시
        res.send("회원가입 성공하셨습니다.")
    } else {
        //로그인 실패시
        res.send("다시 입력해주세요.")
    }}
)

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
