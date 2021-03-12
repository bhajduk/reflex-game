let counter = 0;
let i = 10;
let gameBoardWidth = document.querySelector('#gameMain').clientWidth;
let gameBoardHeight = document.querySelector('#gameMain').clientHeight;

window.addEventListener('resize', () => {
    gameBoardWidth = document.querySelector('#gameMain').clientWidth;
    gameBoardHeight = document.querySelector('#gameMain').clientHeight;
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(gameBoardWidth);
    console.log(gameBoardHeight);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function backgroundHit() {
    counter--;
    document.getElementById('gameMain').style.backgroundColor = 'red';
}

function randomShow() {
    let x = getRandomIntInclusive(-gameBoardWidth / 2, gameBoardWidth / 2);
    let y = getRandomIntInclusive(-gameBoardHeight / 2, gameBoardHeight / 2);

    if (i < 3) document.getElementById('circle').style.backgroundColor = 'red';

    document.getElementById('gameMain').style.backgroundColor =
        'rgb(53, 53, 53)';

    document.getElementById('circle').innerHTML = '';

    document.getElementById('circle').style.transform =
        'translate(' + x + 'px,' + y + 'px)';
    counter++;
}

function timer() {
    document.getElementById('time').innerHTML = `time: ${i}`;
    i--;

    if (i < 3) document.getElementById('time').style.color = 'red';

    if (i < -1) {
        document.getElementById('personalBest').innerHTML = 'score: ' + counter;

        document.getElementById('circle').setAttribute('onclick', ';');
        document.getElementById('circle').style.cursor = 'default';
        document.getElementById('gameMain').setAttribute('onclick', ';');
        document.getElementById('time').innerHTML = 'time expired';
        document.getElementById('gameMain').innerHTML =
            '<div id = "retry" onclick = "location.reload();">try again</div>';
        document.getElementById('gameMain').style.backgroundColor =
            'rgb(23, 23, 23)';
    } else setTimeout(timer, 1000);
}
