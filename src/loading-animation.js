import $ from 'jquery';

$(window).on('load', () => {
  $('.loader-wrapper').fadeOut('slow');
  $('#content').fadeIn('slow');
  $('#content').style.display = 'block';
});
