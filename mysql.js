var express = require('express');

var router = express.Router();


var mysql = require('mysql');


var con = mysql.createConnection({

  host: "ilab.engr.utk.edu",

  user: "geast",

  password: "geast@421"

});


con.connect(function(err) {

    if (err) throw err;

    console.log("Connected!");

    //res.send('MySQL::Connected!');

  });


/* GET users listing. */

router.get('/order', function(req, res, next) {

con.query("SELECT * FROM geast.order", function (err, result, fields) {

    if (err) throw err;

    // console.log(result);

    res.send(result);

    //res.send('MySQL::Got Data!');

  });

});


/*post order*/

router.post('/order', function(req, res, next) {

  var sql = con.query("INSERT INTO geast.order set ? ", req.body, function (err, result, fields) {

    if (err) throw err;

    

    console.log(sql);

    // res.send(result);

    res.json({"status": "OK"}); // your own

  });

});


/* GET users listing. */

router.get('/review', function(req, res, next) {

  con.query("SELECT * FROM geast.review", function (err, result, fields) {

    if (err) throw err;

    // console.log(result);

    res.send(result);

    //res.send('MySQL::Got Data!');

  });

});


/* Post student data. */

router.post('/review', function(req, res, next) {

  var sql = con.query("INSERT INTO geast.review set ? ", req.body, function (err, result, fields) {

    if (err) throw err;

    

    console.log(sql);

    // res.send(result);

    res.json({"status": "OK"}); // your own

  });

});




module.exports = router;

