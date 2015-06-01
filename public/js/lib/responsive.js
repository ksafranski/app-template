/**
 * @namespace dom
 */
var dom = {
  
  /**
   * Initializes responsive menu listeners
   * @method initResponsive
   */
  initResponsive: function () {
    var menuToggle = document.getElementsByClassName('header-menu-toggle')[0];
    var menu = document.getElementsByClassName('header-menu')[0];
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('menu-open');
    });
  }
  
};

export default dom;