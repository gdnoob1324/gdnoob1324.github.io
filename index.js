var ytId = new URLSearchParams(window.location.search).get("v");
if (ytId == null) ytId = 'oCrobJMZBTo';

var player = new YT.get(document.getElementById("yt-player"));
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        videoId: ytId,
        events: {
            'onReady': ()=>{
                // event.target.playVideo();
            },
            'onStateChange': ()=>{
            }
        }
    });
}

function changeVideo(id) {
  let videoId = '';
  let button = $('.controller>button');
  switch(id) {
    case 0: videoId = 'oCrobJMZBTo'; break;
    case 1: videoId = 'YCg__giT4ko'; break;
    case 2: videoId = 'RBIUyqNBnZs'; break;
  }
  button.css("background-color", "#111");
  button.eq(id).css("background-color", "#202020");
  player.loadVideoById(videoId);
}