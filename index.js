var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt', {
        videoId: 'oCrobJMZBTo',
        playerVars: {
            'rel': 0,
            'controls': 1,
            'loop': 1,
            'playsinline': 1,
        },
        events: {
            'onReady': (e) => { e.target.playVideo(); },
            'onStateChange': (e) => {}
        }
    });
}

function changeVideo(id) {
    let videoId = '';
    let button = $('.controller>button');
    switch (id) {
        case 0: videoId = 'oCrobJMZBTo'; break;
        case 1: videoId = 'YCg__giT4ko'; break;
        case 2: videoId = 'RBIUyqNBnZs'; break;
    }
    button.removeClass("focus");
    button.eq(id).addClass("focus");
    player.loadVideoById(videoId);
}