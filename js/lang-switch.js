$('[lang="vi"]').hide();

$(document).ready(function() { 
  $('#switch-lang').click(function() {
    $('[lang="vi"]').toggle();
    $('[lang="en"]').toggle();
  });
});