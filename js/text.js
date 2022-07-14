var current = 1;
var height = $(".text").height();
var numberDivs = $(".text").children().length;
var first = $(".text h2:nth-child(1)");
setInterval(function () {
  var number = current * -height;
  first.css("margin-top", number + "px");
  if (current === numberDivs) {
    first.css("margin-top", "0px");
    current = 1;
  } else current++;
}, 4000);
