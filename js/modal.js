
/*var btn = document.getElementById("myBtn");


  btn.onclick = function() {
      document.getElementById('myModal').style.display = "block";
  }
  span.onclick = function() {
      modal.style.display = "none";
  }*/
function md() {
    var modal = document.getElementById('myModal');
    if(modal.style.display = "none")
        modal.style.display = "block";
}
function clsmd(){
    document.getElementById('myModal').style.display = "none";

}
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
