const express = require('express');
const app = express();
const port = 8080; 
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const upload = multer({
    //dest : 'uploads/'   
    storage: multer.diskStorage({
        destination(req, file, done){
            console.log("destination : ", req.body);
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            console.log(req.body);
            done(null, req.body.ID + ext);  // path.basename(file.originalname, ext) + ext
        },
    }),
    limits: { fileSize: 5*1024*1024 },
});


app.set( "view engine", "ejs");
app.use( express.static( "uploads")  );
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() ); 

app.get("/", test, test2, function(req, res) {  // test, tes2 -> router
    res.render("index");
});

app.post("/upload", upload.single('userfile'), function(req, res) { //single : name 으로 넘어온 하나의 파일만 받는다. 
    console.log(req.file);
    res.render("result", { filename: req.file.filename });
})
app.post("/upload/array", upload.array('userfile'), function(req, res) {
    console.log(req.body);
    console.log(req.files);   
    res.send("Upload Array")
})
//넘어오는 파일의 name을 하나하나 지정해줘야 한다. fields는 번거로워서 자주 사용하지는 않는편.
app.post("/upload/fields", upload.fields([{name:'userfile'}, {name:'userfile2'}, {name:'userfile3'}]), function(req, res) {
    console.log(req.body);
    console.log(req.files);   
    res.send("Upload Fields")
})

function test(req, res, next) {
    console.log("test 함수");
    console.log( req.path );  // "/"
    req.aaa = "....";
    next();                   // test2 실행
}

function test2(req, res, next) {
    console.log("test2 함수");
    console.log( req.aaa );   //test 함수 안에 같은 req 객체를 공유한다.
    next();                   // function(req, res) 실행 
}

app.listen(port, () => {
    console.log( "Server Port: ", port)
})