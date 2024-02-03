var sidebar = document.querySelector('#header');
var sidebarBtn = document.querySelector('#ham');
sidebarBtn.addEventListener('click', function(event) {
if (this.classList.contains('active')) {
this.classList.remove('active');
sidebar.classList.remove('active');
} else {
this.classList.add('active');
sidebar.classList.add('active');
}
});