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
      'onReady': (event) => {event.target.playVideo();},
      'onStateChange': (event) => {}
    }
  });
}

function changeVideo(id) {
  var videoId = '';
  var button = $('.controller>button');
  switch(id) {
    case 0: videoId = 'oCrobJMZBTo'; break;
    case 1: videoId = 'YCg__giT4ko'; break;
    case 2: videoId = 'RBIUyqNBnZs'; break;
  }
  var bgc = "background-color";
  button.css(bgc, "#111");
  button.eq(id).css(bgc, "#202020");
  player.loadVideoById(videoId);
}