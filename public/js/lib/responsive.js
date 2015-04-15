/**
 * General handlers for responsive elements
 */
(function () {
  /**
   * Handle toggle for responsive menu slider
   */
  var menuToggle = document.getElementsByClassName('header-menu-toggle')[0];
  var menu = document.getElementsByClassName('header-menu')[0];
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('menu-open');
  });
})();