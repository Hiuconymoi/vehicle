var express = require('express');
var router = express.Router();

//render ra form nhập liệu bằng method GET
router.get('/add', (req,res)=>{
    res.render('mobile/add');
})

//lấy dữ liệu từ form bằng method POST
router.post('/display',(req,res)=>{
    //luu du lieu nhap tu form
    var data=req.body;
    //render ra file view va gui kem du lieu tu form
    res.render('mobile/display',{data:data});
})

module.exports = router;