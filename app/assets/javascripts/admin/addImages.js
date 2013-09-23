$(function(){
	addImages();
	switchCover();
});

function addImages(){
	addImage = $('.admin .add-image');
	section = $('.admin form fieldset').attr("class");

	lastImage = $('#'+section+'_images_field input:last-child').attr('id');
	if (lastImage == null) {

	}else{
	// Obtenemos el ultimo index de imagenes si existe
		if (lastImage.length) {
			lastImageSplit = lastImage.split('_');
			i = lastImageSplit[3] ;
			i++;
		}else{
			i = 1;
		}
	}

// Agregamos un nuevo campo de imagen
	addImage.off('click').on('click', function(e){
		e.preventDefault();
		$('.admin .images_field .row-fluid').append('<div class="span4 attachment"><label for="'+section+'_images_attributes_'+i+'_attachment">Image</label><input id="'+section+'_images_attributes_'+i+'_attachment" name="'+section+'[images_attributes]['+i+'][attachment]" type="file"></div>');
		i++;
	});

// Si hay errores al crear un nuevo registro borramos todas las imagenes
	if ($('#errorExplanation').length>0) {
		$('.new_'+section+' #'+section+'_images_field .span3').remove();
	};
}


function switchCover(){
	$('input.cover_select').change(function() {
		$('input.cover_select').prop('checked', false);
		$(this).prop('checked', true);
	})
}