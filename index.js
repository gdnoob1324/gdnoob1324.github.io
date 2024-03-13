var eventt;

var player = new YT.get(document.getElementById("yt-player"));
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        videoId: new URLSearchParams(window.location.search).get("v") ?? 'oCrobJMZBTo',
        events: {
            'onReady': (event) => {
                event.target.playVideo();
                eventt = event;
            },
            'onStateChange': (event) => {
                event.target.getPlayerState();
            }
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