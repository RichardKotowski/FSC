/*
 * Bootstrap Image Gallery JS Demo 3.0.0
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global window, document, blueimp, $ */

$(function() {
	'use strict';

	(function(result) {
		var linksContainer = $('#links'), baseUrl;
		// Add the demo images as links with thumbnails to the page:
		$.each(result.photos.photo, function(index, photo) {
			baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/'
					+ photo.server + '/' + photo.id + '_' + photo.secret;
		$('<a/>')
			.append($('<img>')
			.prop('src', baseUrl + '_s.jpg'))
			.prop('href', baseUrl + '_b.jpg')
			.prop('title', photo.title)
			.attr('data-gallery', '')
			.appendTo(linksContainer);
		});
	});

	$('#borderless-checkbox').on('change', function() {
		var borderless = $(this).is(':checked');
		$('#blueimp-gallery').data('useBootstrapModal', !borderless);
		$('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
	});

	$('#image-gallery-button').on('click', function(event) {
		event.preventDefault();
		blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
	});
});
