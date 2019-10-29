//$('button').on('click', function() {$('ol').append('<li>This is a test</li>')})
$('button#b1').on('click', function() {
	$('ol').append($('<li></li>').attr('class', 'class1'))
});
//$('ol').append('<li>This is a test</li>');
