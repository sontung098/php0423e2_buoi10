// Click menu

var a = document.querySelectorAll(".header .menu li");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".header .menu li.active");
    if (b) b.classList.remove("active"); 
      this.classList.add('active');
  };
}; 

// Menu Toggle

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('.row');
menuToggle.onclick = function() {
  header.classList.toggle('active');
}