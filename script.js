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