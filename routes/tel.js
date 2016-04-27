var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var crypto = require('crypto');
// var nodeXlsx = require('node-xlsx');
var storage  = multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,path.join(__dirname,"..","public/uploads/"));
	},
	filename:function(req,file,cb){
		crypto.pseudoRandomBytes(16, function (err, raw) {
	      if (err) return cb(err)
	      cb(null, file.originalname.split('.')[0]+ "-" + raw.toString('hex') + path.extname(file.originalname));
		})}
	});
var upload = multer({
		storage:storage,
		fileFilter:function(req,file,cb){
			var mimetype = file.mimetype.split('/')[1];
			console.log("mimetype ",mimetype);
			console.log("filetype ",file.mimetype);

			if(!(mimetype =='vnd.ms-excel' || mimetype =='vnd.openxmlformats-officedocument.spreadsheetml.sheet')){
				//req.fileValidationError = '请上传excel文件';
				return cb(null,false,new Error("请上传excel文件"));
			}


			cb(null,true);
	}}).single('excel');
/*
var upload = multer({
	dest:path.join(__dirname,"..","public/uploads/"),
	fileFilter:function(req,file,cb){
		var mimetype = file.mimetype.split('/')[1];
		console.log("filetype ",file.mimetype);
		if(mimetype !=='vnd.ms-excel' || mimetype !=='vnd.openxmlformats-officedocument.spreadsheetml.sheet' ){
			req.fileValidationError = '请上传excel文件';
			return cb(null,false,new Error("请上传excel文件"));
		}
		cb(null,true);
	}}).single('excel');
*/
// console.log("path ",path.join(__dirname,"..","public/uploads/"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('telInstitude', { title: '泰尔实验室' });
});
router.post('/upload',function(req,res,next){
	upload(req,res,function(err){
		if(err){
			console.log("multer error ",err);
			res.end(err);

			// next(new Error("fileValidationError"));
			return;
		}
		else {
			console.log("server ",req.file);
			console.log("server req body ",req.body);
			res.end("good");
		}

	});

	//req.file req,body=text fields
});
router.get('/upload',list);

router.post('/submit',form);//单独提交页面的submit


function form(req,res,next){


};
function list(req, res, next){
	res.render("terminalList",{title:"终端检测列表"});

}
function upload(){

}




module.exports = router;