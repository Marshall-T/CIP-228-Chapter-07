/*
 *  Marshall Taylor
 *  CIP 228
 *  Ct 7 P 2
 */

//  rewind function resets time to zero and resets the button to "play"
var rewind = document.getElementById('rewd');
rewd.onclick = function () {
    video.currentTime = 0; video.pause();
    fwdClass.className = fwdClass.className.replace("glyphicon glyphicon-pause", "glyphicon glyphicon-play");
}

//  back function docks the timeline 10 seconds
var back = document.getElementById('back');
back.onclick = function () { video.currentTime -= 10; }

//  play function starts and stops the video
//  also sets and restes the play pause button
var forward = document.getElementById('fwd');
fwd.onclick = function () {
    fwdClass = document.getElementById('fwdClass');
    if (video.paused) {
       video.play();
       fwdClass.className = fwdClass.className.replace("glyphicon glyphicon-play", "glyphicon glyphicon-pause");
    } else {
       video.pause();
       fwdClass.className = fwdClass.className.replace("glyphicon glyphicon-pause", "glyphicon glyphicon-play");
    }
}

//  forward function adds 10 seconds to hte timeline
var forward = document.getElementById('fFwd');
fFwd.onclick = function () { video.currentTime += 10; }

/*  some debugging code
 *  var textTag = document.getElementById('video');
 *  video.onmouseover = function() { addEventListener("mouseover", alert("Testing"));}
 *
 *  console.log ("***");
 *  console.log (video);
 */