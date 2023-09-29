var express = require('express');
var router = express.Router();

//Get
router.get('/add',(req, res) => {
    res.render('vehicle/add')
})

//Post
router.post('/view',(req, res) => {
    var data=req.body;
    res.render('vehicle/view',{vehicle:data})
})

module.exports = router;