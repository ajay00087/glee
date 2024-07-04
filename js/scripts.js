
// SP menu script
const clearmenubtn = document.querySelector('.clear-menu-btn');
clearmenubtn.addEventListener('click', function(){
    clearmenubtn.classList.toggle('clearmenubtn_active')
});

const menutglbtncheckbox = document.querySelector('.menu_tglbtn_checkbox');
menutglbtncheckbox.addEventListener('click', function(){
    menutglbtncheckbox.classList.toggle('menu_tglbtn_checkbox_check')
    SPmenuBg.classList.add('SPmenuBg_active')
});

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
navbarToggler.addEventListener('click', function(){
    navbarCollapse.classList.toggle('show')
});

const SPmenuBg = document.querySelector('.SPmenuBg');
SPmenuBg.addEventListener('click', function(){
    SPmenuBg.classList.remove('SPmenuBg_active')
    navbarCollapse.classList.remove('show')
    menutglbtncheckbox.classList.remove('menu_tglbtn_checkbox_check')
});



/* back to top  */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").classList.add('active');
  } else {
    document.getElementById("scrollBtn").classList.remove('active');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
