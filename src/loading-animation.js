import $ from 'jquery';
import particleInit from './header-background';

$(window).on('load', () => {
  $('.loader-wrapper').fadeOut('slow');
  $('#content').fadeIn('slow');
  $(window).trigger('resize');

  particleInit();
});
