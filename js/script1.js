/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
document.getElementById("dropper").onclick = function() {myFunction()};

function myFunction() {
console.log("clicked")
  document.getElementById("dropper").classList.toggle("show");
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}