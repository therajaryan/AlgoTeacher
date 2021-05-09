const express = require('express');
const MongoClient =require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
var runner = require("child_process");
const CONNECTION_URL ='mongodb://localhost:27017/myApp';
const DATABASE_NAME = 'myApp';   
const BodyParser = require('body-parser');
var app = express();

const Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){let c1,c2;var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);let c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};


app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));


app.listen(5000,()=>{ 
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    console.log("Connected to `" + DATABASE_NAME + "`!");
});});






// Api for inserting data to the collection in db
app.get('/insert/:collection/:data', function(request, response,next) {
    var col = request.params.collection;
    var collection = database.collection(col);
    var data = JSON.parse(Base64.decode(request.params.data));
    collection.insertOne(data, (error, result) => {

        if(error) {
            return response.status(500).send(error);
        }
        else{
            var obj = {
                status:"Success",
            }
            obj = JSON.stringify(obj);
        }
        response.send(obj);

    });
});

app.get('/insertMany/:collection/:data', function(request, response,next) {
    var col = request.params.collection;
    var collection = database.collection(col);
    var data = JSON.parse(Base64.decode(request.params.data));
    collection.insertMany(data, (error, result) => {

        if(error) {
            return response.status(500).send(error);
        }
        else{
            var obj = {
                status:"Success",
            }
            obj = JSON.stringify(obj);
        }
        response.send(obj);

    });
});

// API for retrieving data from the database
app.get("/retrieve/:collection/:key/:data", (request, response) => {
    var col = request.params.collection;
    var collection = database.collection(col);
    var key = Base64.decode(request.params.key);
    var data = Base64.decode(request.params.data);
    var query = {};
    query[key] = data;
    collection.find(query).toArray(function(err, documents) {
        if (err) throw err;
        response.send(documents);
       
    });
});

app.get("/login/:collection/:data", (request, response) => {
    var col = request.params.collection;
    var collection = database.collection(col);
    var data = JSON.parse(Base64.decode(request.params.data));
    var query = {};
    query["Email"] = data['Email'];
    query['Password'] = data['Password'];
    collection.find(query).toArray(function(err, documents) {
        if (err) throw err;

        var result = {};
        
        if(documents.length>0){
            result = {
                'status' : "Success",
                "data" : documents
            };
        }
        else{
            result = {
                'status' : "Wrong",
            }
        }
        response.send(JSON.stringify(result));
    });
});




// API for updating data in the collection
app.get("/update/:collection/:data/:where", (request, response) => {
    var col = request.params.collection;
    var collection = database.collection(col);
    var where = Base64.decode(request.params.where);
    var data = Base64.decode(request.params.data);
    var query = {};
    query = where;
    let update = {
        $set : data
    };

    collection.update(query,update).toArray(function(err, documents) {
        var resp;
        if (err){
            resp['status']="Error";
            throw err;
        }
        else{
            resp['status'] = "Success";
        }
            response.send(JSON.stringify(resp));
    });
});



process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
});

process.on('SIGTERM', function(code) {
    return console.log(`About to kill with code ${code}`);
});

process.on('uncaughtException', function(code) {
    return console.log(`uncaughtException, about to kill with code ${code}`);
});


// app.get('/myApp/update/:document/:data/:where', function(req, res,next) {
//     var document = req.params.document;
//     var data = req.params.data;
//     var where = req.params.where;

//     var jsScriptPath = __dirname + '/script.js';
//     var argsString = "update,"+document+","+data+","+where;
//     runner.exec("php " + jsScriptPath + " " +argsString, function(err, jsResponse, stderr) {
//         if(err) console.log(err);
//         res.send(jsResponse);
//         console.log( jsResponse );
//     });
// });

// app.get('/myApp/checkUser/:document/:data', function(req, res,next) {
//     var document = req.params.document;
//     var data = req.params.data;

//     var jsScriptPath = __dirname + '/script.js';
//     var argsString = "checkUser,"+document+","+data;
//     runner.exec("php " + jsScriptPath + " " +argsString, function(err, jsResponse, stderr) {
//         if(err) console.log(err);
//         res.send(jsResponse);
//         console.log( jsResponse );
//     });
// });

// app.get('/myApp/image/:document/:data', function(req, res,next) {
//     var document = req.params.document;
//     var data = req.params.data;

//     var jsScriptPath = __dirname + '/script.js';
//     var argsString = "image,"+document+","+data;
//     runner.exec("php " + jsScriptPath + " " +argsString, function(err, jsResponse, stderr) {
//         if(err) console.log(err);
//         res.send(jsResponse);
//         console.log( jsResponse );
//     });
// });


// app.get('/myApp/select/:document/:head/:data', function(req, res,next) {
//     var document = req.params.document;
//     var head = req.params.head;
//     var data = req.params.data;
    

//     var jsScriptPath = __dirname + '/script.js';
//     var argsString = "select,"+document+","+head+","+data;
//     runner.exec("php " + jsScriptPath + " " +argsString, function(err, jsResponse, stderr) {
//         if(err) console.log(err);
//         res.send(jsResponse);
//         console.log( jsResponse );
//     });
// });

// app.get('/myApp/push/:document/:head/:data', function(req, res,next) {
//     var document = req.params.document;
//     var head = req.params.head;
//     var data = req.params.data;
    

//     var jsScriptPath = __dirname + '/script.js';
//     var argsString = "push,"+document+","+head+","+data;
//     runner.exec("php " + jsScriptPath + " " +argsString, function(err, jsResponse, stderr) {
//         if(err) console.log(err);
//         res.send(jsResponse);
//         console.log( jsResponse );
//     });
// });

// app.get('/myApp/check/:document/:data', function(req, res,next) {
//     var document = req.params.document;
//     var data = req.params.data;
    

//     var jsScriptPath = __dirname + '/script.js';
//     var argsString = "check,"+document+","+data;
//     runner.exec("php " + jsScriptPath + " " +argsString, function(err, jsResponse, stderr) {
//         if(err) console.log(err);
//         res.send(jsResponse);
//         console.log( jsResponse );
//     });
// });

// app.get('/myApp/refer/:data', function(req, res,next) {
//     var data = req.params.data;
    

//     var jsScriptPath = __dirname + '/script.js';
//     var argsString = "refer,"+data;
//     runner.exec("php " + jsScriptPath + " " +argsString, function(err, jsResponse, stderr) {
//         if(err) console.log(err);
//         res.send(jsResponse);
//         console.log( jsResponse );
//     });
// });

// server.listen();
