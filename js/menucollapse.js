$( document ).ready(function() {

var menu;
	$( "#menu" ).click(function() {

		if (menu==undefined||menu==false){

			$('#menuList').css('display', 'block');
			 menu=true;

		}
		else{
			$('#menuList').css('display', 'none');
			 menu=false;

		}
			

	});

/*mouse over menues items*/
	

     $('#menuList li a').hover(
         function () {
           $(this).parent().css({"background-color":"#eeeeee"});
         }, 
         function () {
           $(this).parent().css({"background-color":"#ffffff"});
         }
     );

});



