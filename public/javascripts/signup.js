(function($){
	$("#submit").validate({
		rules:{
			name:"required",
			password:{
				required:true,
				minlength:5,
				maxlength:20
			},
			confirm_password:{
				required:true,
				minlength:5,
				maxlength:20,
				equalTo:"#password"
			},
			email:{
				required:true,
				email:true
			},
			// img-captcha:{
			// 	required:true
			// }
		},
		messages:{
			name:"请填写用户名",
			password:{
				required:"请设置密码",
				minlength:"密码至少为5位",
				maxlength:"密码长度不超过20"
			},
			confirm_password:{
				required:"请再次输入密码",
				minlength:"密码至少为5位",
				maxlength:"密码长度不超过20",
				equalTo:"两次密码不一致，请重新输入"
			},
		}
	});
	$(".require-form").on("click","#submit",function(){
		var data = $(".require-form").serialize();
		$.ajax({
			url:"/signup",
			dataType:"json",
			success:function(response){
				if(response.statuscode===0){
					console.log("success");
				}

			},
			error:function(){

			}
		})
	})

})(jQuery);