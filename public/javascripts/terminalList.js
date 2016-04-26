// var $ = require('jQuery');
// var FormData = require('form-data');   //可以不加？
var form = new FormData();


form.append("excel_file",$(".inputfile").get(0).files[0]);
$("#fileList").on("click",".submit",function(){
		var request = $.ajax({
			url: '/tel/upload',
			method:'post',
			processData:false,
			contentType:false,
			cache:false,
			success:function(data,textStatus,jqXHR){
				console.log("-------",data);
				$(".submit").text("上传成功");
				console.log("---receive data"+data);
			},
			error:function(jqXHR,textStatus,errorThrown){
				// alert(XMLHttpRequest.status);    //http响应状态
    			// alert(XMLHttpRequest.readyState);//5个状态

			}
		}).done(function(){

		});
	});

// (function($){



// })(jQuery);