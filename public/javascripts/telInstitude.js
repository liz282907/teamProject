(function($){

	$("#menu").on("click",".menu-item h1",function(e){
		var $this = $(this);
		// var down = $this.data("down");
		$this.parent().toggleClass("open")
			.end().next(".submenu").slideToggle();
		/*
		if($this.data("down")){
			$this.siblings().slideUp().
				end().children(".submenu").slideDown("fast")
				.end().data("down",!down);
		}
		else{
			$this.siblings().slideDown()
				.end().children(".submenu").slideUp("slow")
					.end().data("down",!down);
		}
		*/
	});

})(jQuery);