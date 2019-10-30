"use strict";

var index = 0;
var playAnimation;
var miliseconds = 250;


$(document).ready(function() {
  $("#start").click(startClick);
  $("#stop").click(stopClick);
  $("#animations").change(animationSelect);
  $("#size").change(textSelect);
  $("#turbo").change(turboTime);
  $("#stop").prop("disabled", true);
  $("#turbo").prop("disabled", true);


});

function animationSelect() {
  var aniselect = $("#animations").val();
  $("#displayarea").val(ANIMATIONS[aniselect]);
}


function animateFrames() {
  var animationFrames = $("#animations").val();
  var splitAnimation = ANIMATIONS[animationFrames].split("=====\n");

  if(index < splitAnimation.length) {
    $("#displayarea").val(splitAnimation[index]);
    index++;
  }
  else {
    index = 0;
    $("#displayarea").val(splitAnimation[index]);
    index++;
  }
}

function turboTime() {
  if($("#turbo").is(":checked")) {
    miliseconds = 50;
    clearInterval(playAnimation);
    playAnimation = setInterval(animateFrames, miliseconds);
  }
  else {
    miliseconds = 250;
    clearInterval(playAnimation);
    playAnimation = setInterval(animateFrames, miliseconds);
  }
}

function textSelect() {
  var textselect = $("#size").val();
  $("#displayarea").css("font-size", textselect);
}

function startClick() {
  playAnimation = setInterval(animateFrames, miliseconds);
  $("#stop").prop("disabled", false);
  $("#start").prop("disabled", true);
  $("#animations").prop("disabled", true);
  $("#turbo").prop("disabled", false);
}

function stopClick() {
  var animationFrames = animationSelect();
  clearInterval(playAnimation);
  $("#start").prop("disabled", false);
  $("#animations").prop("disabled", false);
  $("#turbo").prop("disabled", true);
  $("#stop").prop("disabled", true);
}
