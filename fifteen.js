/*Kristen Martinet
CSC 3610
CSS for Project 4*/

"use strict";

var blank_top = 300;
var blank_left = 300;

$(document).ready(function() {
  $("#shufflebutton").click(shuffleClick);
  $("#puzzlearea > div").css("position", "absolute");
  setPuzzle();
  $("#puzzlearea > div").click(moveClick);
  $("#puzzlearea > div").hover(pieceHover, removeHover);
});

function moveClick() {
  var clicked_left = parseInt($(this).css("left"));
  var clicked_top = parseInt($(this).css("top"));
  if (clicked_left == blank_left && clicked_top == (blank_top - 100)) {
    $(this).css("top", blank_top);
    blank_top = blank_top - 100;
  }
  if (clicked_top == blank_top && clicked_left == (blank_left - 100)) {
    $(this).css("left", blank_left);
    blank_left = blank_left - 100;
  }
  if (clicked_top == blank_top && clicked_left == (blank_left + 100)) {
    $(this).css("left", blank_left);
    blank_left = blank_left + 100;
  }
  if (clicked_left == blank_left && clicked_top == (blank_top +100)) {
    $(this).css("top", blank_top);
    blank_top = blank_top + 100;
  }
}

function shuffleClick() {
  //Random number of moves between 100 and 200
  var random = 100 + parseInt(Math.random() * (100 + 1));

  for(var i = 1; i < random; i++) {
  $("#puzzlearea > div").each(moveClick);
  }
}

function setPuzzle() {
  $("#puzzlearea > div").each(setImage);
}

function setImage(index) {
  var row = Math.floor(index/4);
  var col = index%4;
  var top = row*100+"px";
  var left = col*100+"px";
  $(this).css("top", top);
  $(this).css("left", left);
  $(this).css("background-image", "url(background.png)");
  $(this).css("background-position", (-1*col*100) + "px " + (-1*row*100) + "px");
}

function pieceHover() {
    var left = parseInt($(this).css("left"));
    var top = parseInt($(this).css("top"));
    if (left == blank_left && top == (blank_top - 100)) {
      $(this).addClass("mouseHover");
    }
    else if (top == blank_top && left == (blank_left - 100)) {
      $(this).addClass("mouseHover");
    }
    else if (top == blank_top && left == (blank_left + 100)) {
      $(this).addClass("mouseHover");
    }
    else if (left == blank_left && top == (blank_top +100)) {
      $(this).addClass("mouseHover");
    }
    else {
      $(this).removeClass("mouseHover");
    }
}

function removeHover() {
  $(this).removeClass("mouseHover");
}
