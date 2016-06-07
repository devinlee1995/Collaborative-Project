var count = 1;
var amount = 5;
for (i = count+1; i < amount; i++) {
	$("img").eq(i).hide();
}; 
$(".images").click(function(e){    
		e.preventDefault() 
		for (i = count; i < amount; i++) {
			$("img").eq(i).fadeOut(200);
		};
		count = ((count+1)%(amount));
		if (count == 0) {
			count = 1;
		}
		$("img").eq(count).fadeIn(200);
});

document.getElementById('submit').onclick=function(){
	var name = document.getElementById('name').value;
	var donation = document.getElementById('donation').value;

	var re = /.*[0-9].*/;
	var re2 = /^\d+$/;

	if (re.test(name)) {
		alert("There shouldn't be a number in your name!")
	}

	else {
		if (re2.test(donation)) {
			document.getElementById('donation_form').innerHTML = ''
			document.getElementById('donate').innerHTML = "Donated!"
		}
	}
	return false;
};

$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});