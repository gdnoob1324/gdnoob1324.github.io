function setVolume() {
    var widgetIframe = document.getElementById("scplayer"),
        fixWidget = SC.Widget(widgetIframe);
    fixWidget.setVolume(10);
}

$("playButton").click(function () {
    setVolume();
});

const audio = new Audio("https://www.myinstants.com/media/sounds/epic.mp3");
audio.volume = .3;

function rickRoll() {
    audio.play();
}