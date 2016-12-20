// Slick //
$(document).on('ready', function() {
      // $(".rest-switcher__slider").slick({
      //   dots: true,
      //   infinite: true,
      //   slidesToShow: 1,
      //   slidesToScroll: 1
      // });
      $(".shares__slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
});

// Tabs//
var tabs = document.querySelectorAll('.rest-switcher__tab-box .rest-switcher__tab-item');
var contents = document.querySelectorAll('.rest-switcher__slider .rest-switcher__item');

function changeTab(event) {
for (var i=0; i<tabs.length; i++){
tabs[i].classList.remove('is-active');
}
event.target.classList.add('is-active');

for (var i=0; i<contents.length; i++) {
contents[i].classList.remove('is-active');
}

var link = event.target.getAttribute('href');
document.querySelector(link).classList.add('is-active');
}


for (var i=0; i<tabs.length; i++){
tabs[i].addEventListener('click', changeTab);
}

// Toggler //
$(document).on('ready', function(){
  
   $("#toggler-init").click(function(){
      $("#toggler-item").slideToggle(600);
	});

}); 