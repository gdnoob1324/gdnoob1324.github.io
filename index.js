function ToggleSide() {
    if (document.getElementById('Sidebar').style.display == 'none')
        document.getElementById('Sidebar').style.display = 'block';
    else document.getElementById('Sidebar').style.display = 'none';
}


var NaverSvg = 'https://cdn.simpleicons.org/naver';
var GoogleSvg = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';
function switchQ() {
    let form = document.getElementById('qform');
    let input = document.getElementById('qinput');
    let img = document.getElementById('qimg');
    input.name = input.name == 'query' ? 'q' : 'query';
    form.action = form.action == input.name == 'q' ? 'https://www.google.com/search' : 'https://m.search.naver.com/search.naver';
    if (input.name == 'query') img.src = NaverSvg;
    else  img.src = GoogleSvg;
}