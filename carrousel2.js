


$(document).ready(function(){



let $carroussel=$('#carroussel'),
$img=$('#carrousel img'),
indexImg = $img.length-1,
i=2;


function montre(){
	$img.css('display','none');
	//	faire disparaitre les images 

	$currentImg=$img.eq(i);
	$currentImg.css('display','block');
	// pour faire réaparaitre

}

alert('avant montre');

montre();

alert('après montre');






























});





