// 1.
// Vanilla JS
// document.getElementById("greeting").innerHTML = "Hello World!";
// jQuery
$("#greeting").text("Hello World!");
// 2.
// Vanilla JS
// var select;
// select = "li";
// elem = document.querySelectorAll(select);
// for (var i = 0; i < elem.length; i++) {
// elem[i].style.backgroundColor = "yellow";
// }
// jQuery
$("li").css("background-color", "yellow");

// 3.
// Vanilla JS
// var img = document.createElement("img");
// img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"
// img.id = "gif"
// var foo = document.getElementById("greeting");
// foo.appendChild(img);
// jQuery
$("#greeting").append($(`<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif" id="gif">`));
// 4.
// Vanilla JS
// var selector, elems, makeActive;
//
selector = 'li';
//
elems = document.querySelectorAll(selector);
//
// makeSelected = function (e) {
//     for (var i = 0; i < elems.length; i++) {
//         elems[i].classList.remove('selected');
//     }
//     e.target.classList.add('selected');
// };
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("mousedown", makeSelected);
// }
// jQuery
$("li").bind("click", function () {
    $("ul").children().removeClass('selected');
    $(this).addClass('selected');
    // console.log($(this).text());
    $("img").last().attr("src", "images/" + $(this).text() + ".jpeg");
});
// 5.
// Vanilla JS
// var img1 = document.getElementsByTagName("img");
// currentImg = function (e) {
// img1[1].src = "images/" + e.target.innerHTML + ".jpeg";
// }
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mousedown", currentImg)
// }
// jQuery
// !See line 48 for code
// 6.
// Vanilla JS
// var ghost = document.getElementById("ghosting");
// disappear = function (e) {
//   ghost.parentNode.removeChild(ghost);
// }
// ghost.addEventListener("mouseover", disappear)
// jQuery
$("#ghosting").mouseenter(function () {
    $(this).detach();
})
$("#resize").mouseleave( function () {
  if ($("#ghosting").length) {
    $("#ghosting").show();
  } else {
  $(`<div id="ghosting">`).text("Touch me and I'll disappear!").insertBefore($("#resize"));
  $("#ghosting").mouseenter(function () {
      $(this).detach();
  });
}})
// 7.
// Vanilla JS
// var orange = document.getElementById("resize");
// doubler = function (e) {
//   orange.style.width = "400px";
// }
// shrinker = function (e) {
//   orange.style.width = "";
// }
// orange.addEventListener("mouseover", doubler)
// orange.addEventListener("mouseleave", shrinker)
// jQuery
$("#resize").mouseenter(function () {
  $(this).css("width", "400px")
})
$("#resize").mouseleave(function () {
  $(this).css("width", "")
})
// 8.
// Vanilla JS
// deSelect = function (e) {
//     for (var i = 0; i < elems.length; i++) {
//         elems[i].classList.remove('selected');
//         img1[1].src = "images/panic.jpeg";
//     }
//   };
//
// for (var i = 0; i < elems.length; i++) {
//   document.getElementById("reset").addEventListener("click", deSelect);
// }
// jQuery
$("#reset").bind("click", function () {
    $("ul").children().removeClass('selected');
    $("img").last().attr("src", "images/panic.jpeg");
})
// 9.
// Vanilla JS
// document.addEventListener('keydown', function(event) {
//   var x = event.keyCode;
//   if (x > 47 && x < 58) {
//     alert("I HATE NUMBERZZZ!");
//   }
// });
// jQuery
$(document).keydown(function(event) {
  var x = event.keyCode;
  if (x > 47 && x < 58) {
    alert("I HATE NUMBERZZZ!");
}})
