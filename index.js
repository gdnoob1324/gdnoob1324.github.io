function getBrowser() {
    const browsers = [
        'Naver',
        'Chrome', 'Opera',
        'WebTV', 'Whale',
        'Beonex', 'Chimera',
        'NetPositive', 'Phoenix',
        'Firefox', 'Safari',
        'SkipStone', 'Netscape', 'Mozilla'
    ];
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("edg"))
        return "Edge";
    if (userAgent.includes("trident") || userAgent.includes("msie"))
        return "Internet Explorer";
    return browsers.find((browser) => userAgent.includes(browser.toLowerCase())) || 'Other';
}

if (getBrowser().toLowerCase() == 'naver') {
    // location.replace('https://www.google.co.kr/');
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var gid = Number(((new URL(window.location)).searchParams).get('tab')) ?? 0;

function Mobile() {
    if (/Mobi/i.test(window.navigator.userAgent)) {
    }
}

var IDs = {};
IDs['Young'] = 'NZva0EyfVhw';
IDs['But I Love You So'] = 'Y8n0yTAYUew';
IDs['샐러드와 커피'] = 'R6hHRjfCLI8';
IDs['Hachiko'] = 'oCrobJMZBTo';
IDs['Serenade'] = 'ECgWPp8hvOs';
IDs['Old Song'] = 'NFfPxExTyYA';
IDs['Until I Found You'] = 'znvky0Uq8qc';
IDs['Photograph'] = 'SlbfAYvA_gI';
IDs['4.2 (사이)'] = 'bNObjle08oc'; //'3ziryagRPyQ';
IDs['Main'] = IDs['But I Love You So'];
var getV = (n) => IDs[$('.ytp .controller>button').eq(n).text()];

$(document).ready(function () {
});

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt', {
        videoId: getV(gid),
        playerVars: {
            'rel': 0,
            'autoplay': 0,
            'mute': 0,
            'loop': 1,
            'playsinline': 1,
        },
        events: {
            'onReady': (e) => { e.target.playVideo(); },
            'onStateChange': (e) => { }
        }
    });
    let button = $('.ytp .controller>button');
    button.removeAttr('focus');
    button.eq(gid).attr('focus', '');
}

function changeVideo(id) {
    if (id == gid) return;
    let button = $('.ytp .controller>button');
    let videoId = getV(id);
    button.removeAttr('focus');
    button.eq(id).attr('focus', '');
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
    if ($('#qspan').hasClass('g')) {
        $('#qspan').removeClass('g');
        $('#qimg').attr('src', 'img/n.svg');
    }
    else {
        $('#qspan').addClass('g');
        $('#qimg').attr('src', 'img/g.svg');
    }
}

function searchMode(id) {
    let button = $('.pj .controller>button');
    if (button.eq(id).is('[focus]')) return;
    button.removeAttr('focus');
    button.eq(id).attr('focus', '');
    let search = $('.search');
    let btext = $('.btext');
    if (id == 0) {
        search.removeAttr('nosee');
        btext.attr('nosee', '');
    }
    else if (id == 1) {
        search.attr('nosee', '');
        btext.removeAttr('nosee');
    }
}
