$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu').toggleClass('open');
	});
	$('.menu__link').click(function(event){
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});

	$(document).ready(function(){
		$('.home__slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
		});
	});

	$(document).ready(function(){
		$('.our-menu__slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			initialSlide:1,
			infinite: false
		});
	});
});
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }
