$(document).ready(main);

var contador=1;

function main() {

	$('.menu_bar').click(function(){
		
		// $('nav').toggle(); /* forma rapida de ocultar y mostrar el nav  */
		if(contador==1){   /* --> el menu esta oculto */
			
			$('nav').animate({
				left : '0'
			});
			contador=0;

		}else{

			contador=1;
			$('nav').animate({
				left : '-100%'
			});

		}
		
	});
	
}