$( document ).ready(function() {

var menu;
	$( "#menu" ).click(function() {

		if (menu==undefined||menu==false){

			$('#menuList').css('display', 'block');
			 menu=true;



		/*mouse over menues items*/
	

		     $('#menuList li a').hover(
			 function () {
			   $(this).parent().css({"background-color":"#eeeeee"});
					$( this ).click(function() {
						$('#menuList').css('display', 'none');
						menu=false;
					});
			 }, 
			 function () {
			   $(this).parent().css({"background-color":"#ffffff"});
			 }
		     );

		}
		else{
			$('#menuList').css('display', 'none');
			 menu=false;


		}


	});

});



