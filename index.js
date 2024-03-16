var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var gid = Number(((new URL(window.location)).searchParams).get('tab'));

function getV(n) {
    switch (n) {
        case 0: return 'oCrobJMZBTo';
        case 1: return 'YCg__giT4ko';
        case 2: return '29N8_pSsWCE';
        case 3: return 'RBIUyqNBnZs';
    }
}

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt', {
        videoId: getV(gid),
        playerVars: {
            'rel': 0,
            'autoplay': 1,
            'mute': 0,
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
    button.eq(gid).addClass("focus");
}

function changeVideo(id) {
    if (id == gid) return;
    let button = $('.controller>button');
    let videoId = getV(id);
    button.removeClass("focus");
    button.eq(id).addClass("focus");
    gid = id;
    window.history.pushState({}, null, '?tab=' + id);
    player.loadVideoById(videoId);
}