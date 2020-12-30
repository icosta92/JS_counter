let count = 0;
let wid = Number(window.innerWidth) - Number(document.getElementById('cat').offsetWidth);
$('.cat').css("left", wid + "px");
$('.cat').css("visibility", "visible");


$('#plus').click(function () {
  count = countPlus(count);
});

$('#minus').click(function () {
  count = countMinus(count);
});

$('#bell').click(function () {
  location.reload();
});

function countPlus(plus) {
  if( plus < 9999) {
    plus += 1;
    document.getElementById('count').innerHTML = plus;
    moveCat(plus);
  }
  else {
    minus = 9999;
  }
  return plus;
}

function countMinus(minus) {
  if( minus > 0) {
    minus -= 1;
    document.getElementById('count').innerHTML = minus;
    moveCat(minus);
  }
  else {
    minus = 0;
  }
  return minus;
}

function moveCat(move) {
  let movement = wid - move * 5 + "px";
  $('.cat').css("left", movement);
  let url =  "assets/img/cat/walk/cat-walk-" + ((move % 12) + 1) + ".png";
  $('.cat-image').attr("src", url);
}

document.getElementById("copyright").innerHTML = new Date().getFullYear();
