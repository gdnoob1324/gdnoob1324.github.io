var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var gid = Number(((new URL(window.location)).searchParams).get('tab'));

function getV(n) {
    switch (n) {
        case 0: return 'ECgWPp8hvOs'; // oCrobJMZBTo
        case 2: return 'cLPFxdWU42U';
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

function switchQ() {
    let form = document.getElementById('qform');
    let input = document.getElementById('qinput');
    let aN = 'https://m.search.naver.com/search.naver';
    let aG = 'https://www.google.com/search';
    form.action = form.action == aN ? aG : aN;
    input.name = input.name == 'query' ? 'q' : 'query';
    if ($('#qspan').hasClass('g')) $('#qspan').removeClass('g')
    else $('#qspan').addClass('g');
}