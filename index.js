var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var urlParams = (new URL(window.location)).searchParams;

var player;
function onYouTubeIframeAPIReady() {
    let videoId;
    let id = Number(urlParams.get('tab'));
    switch (id) {
        case 0: videoId = 'oCrobJMZBTo'; break;
        case 1: videoId = 'YCg__giT4ko'; break;
        case 2: videoId = 'RBIUyqNBnZs'; break;
    }
    player = new YT.Player('yt', {
        videoId: videoId,
        playerVars: {
            'rel': 0,
            'controls': 1,
            'loop': 1,
            'playsinline': 1,
        },
        events: {
            'onReady': (e) => { e.target.playVideo(); },
            'onStateChange': (e) => { }
        }
    });
    let button = $('.controller>button');
    button.removeClass("focus");
    button.eq(id).addClass("focus");
}

function changeVideo(id) {
    let button = $('.controller>button');
    let videoId;
    switch (id) {
        case 0: videoId = 'oCrobJMZBTo'; break;
        case 1: videoId = 'YCg__giT4ko'; break;
        case 2: videoId = 'RBIUyqNBnZs'; break;
    }
    button.removeClass("focus");
    button.eq(id).addClass("focus");
    urlParams.set('tab', id);
    window.history.pushState({}, null, '?tab=' + id);
    player.loadVideoById(videoId);
}