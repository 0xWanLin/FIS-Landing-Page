$('[lang="vi"]').hide();

$('#switch-lang').click(function() {
  $('[lang="vi"]').toggle();
  $('[lang="en"]').toggle();
});