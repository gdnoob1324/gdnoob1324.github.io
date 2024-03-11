// let currentOrientation = function () {
//     if (screen.availHeight > screen.availWidth) {
//         $("html").addClass('portrait').removeClass('landscape');
//     }
//     else {
//         $("html").addClass('landscape').removeClass('portrait');
//     }
// }
// window.addEventListener("resize", currentOrientation);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'oCrobJMZBTo',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
    // event.target.playVideo();
}

function onPlayerStateChange(event) {

}