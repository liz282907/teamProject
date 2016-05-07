var express = require('express');
var router = express.Router();

router.get("/",function(req,res,next){
	res.render("signup",{title:"注册"});

});
router.post("/signup",function(req,res,next){
	//数据库内容
	var data  = {
		statuscode:0
	}
	res.json(data);
})

module.exports = router;