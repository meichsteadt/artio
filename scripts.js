document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

$(function() {
  var year = new Date().getFullYear()
  $("#year").text(year)
})
