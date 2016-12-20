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