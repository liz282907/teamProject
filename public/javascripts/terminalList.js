// var $ = require('jQuery');
// var FormData = require('form-data');   //可以不加？




$("#fileList").on("click",".submit",function(){
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
				// var receivedData = JSON.parse(data);
				if(data.statusCode==205){
					console.log(data.message);
					$(".submit").text(data.message);
				}
				else
					$(".submit").text(data);
			},
			error:function(jqXHR,textStatus,errorThrown){
				alert("error   ",textStatus);
				console.log("error   ",errorThrown);
				console.log("error   ",jqXHR.status);
				alert("error   ",jqXHR.responseText);

			}
		}).done(function(){

		});

	});

// (function($){



// })(jQuery);