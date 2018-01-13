$(document).ready(function() {
  $('#menu-list').removeClass('current-page-item');

  var splits = window.location.href.split('/');
  var page = splits[splits.length - 1];

  switch (page) {
    case '':
      $('#menu-home').addClass('current_page_item');
      break;
    case 'projects':
      $('#menu-projects').addClass('current_page_item');
      break;
    case 'links':
      $('#menu-links').addClass('current_page_item');
      break;
    case 'contact':
      $('#menu-contact').addClass('current_page_item');
      break;
    default:
      $('#menu-home').addClass('current_page_item');
      break;
  }
})
