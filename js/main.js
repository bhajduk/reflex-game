let counter = 0;
let i = 10;
let gameBoardWidth = document.querySelector('#gameMain').clientWidth;
let gameBoardHeight = document.querySelector('#gameMain').clientHeight;

//fit game area when resizing
window.addEventListener('resize', () => {
    gameBoardWidth = document.querySelector('#gameMain').clientWidth;
    gameBoardHeight = document.querySelector('#gameMain').clientHeight;
});

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // console.log(gameBoardWidth);
    // console.log(gameBoardHeight);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const backgroundHit = () => {
    counter--;
    document.querySelector('#gameMain').style.backgroundColor =
        'rgb(100, 150, 150)';
};

const randomShow = () => {
    let x = getRandomIntInclusive(
        -gameBoardWidth / 2 + 70,
        gameBoardWidth / 2 - 70
    );
    let y = getRandomIntInclusive(
        -gameBoardHeight / 2 + 70,
        gameBoardHeight / 2 - 70
    );

    if (i < 3) document.querySelector('#circle').style.borderColor = '#E53935';

    document.querySelector('#circle').innerHTML = '';

    document.querySelector('#circle').style.transform =
        'translate(' + x + 'px,' + y + 'px)';
    counter++;

    document.querySelector('#gameMain').style.backgroundColor =
        'rgb(151, 190, 190)';
};

const timer = () => {
    document.querySelector('#time').innerHTML = `time: ${i}`;
    i--;

    if (i < 3) document.querySelector('.sum#time').style.color = '#E53935';

    if (i < -1) {
        document.querySelector('#personalBest').innerHTML = 'score: ' + counter;
        document.querySelector('#circle').setAttribute('onclick', ';');
        document.querySelector('#circle').style.cursor = 'default';
        document.querySelector('#gameMain').setAttribute('onclick', ';');
        document.querySelector('#time').innerHTML = 'time expired';
        document.querySelector('#gameMain').innerHTML =
            '<div id = "retry" style = "display: flex; justify-content: center; align-items: center;" onclick = "location.reload();">try again</div>';
        document.querySelector('#gameMain').style.backgroundColor =
            'rgb(100, 150, 150)';
    } else setTimeout(timer, 1000);
};
