var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

const menuIcon = document.querySelector('.fas');
menuIcon.addEventListener('click', toggle_navbar);

function toggle_navbar() {
  const menuItem = document.querySelector('.menu');
  menuItem.classList.toggle('active');
}
