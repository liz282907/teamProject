// var $ = require('jQuery');
// var FormData = require('form-data');   //可以不加？




$("#fileList").on("click",".submit",function(){
	debugger;
		var form = new FormData();

		form.append("excel",$(".inputfile").get(0).files[0]);
		console.log("upload file ",JSON.stringify(form));
		var request = $.ajax({
			url: '/tel/upload',
			method:'post',
			data:form,
			processData: false,
			contentType: false,
			cache:false,
			success:function(data,textStatus,jqXHR){
				console.log("-------",data);
				$(".submit").text("上传成功");
				console.log("---receive data "+data);
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