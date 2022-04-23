const picArray = [

    { src: './images/sikoku1.jpg', title: 'Sikoku' },
    { src: './images/kyoto1.jpg', title: 'Kyoto' },
    { src: './images/beach1.jpg', title: 'Beach' },
    { src: './images/taki.jpg', title: 'River' },
    { src: './images/Mt.Fuji.jpg', title: 'MT.Fuji' },
    { src: './images/nagoya.jpg', title: 'Nagoya' },
    { src: './images/hokkaido.jpg', title: 'Hokkaido' },
    { src: './images/sapporo.jpg', title: 'Sapporo' },
    { src: './images/zusi.jpg', title: 'Kanagawa' }
];

let counter = 0;

function changePicture() {
    if (counter < picArray.length) {
        document.getElementById('pics').src = picArray[counter].src;
        document.getElementById('pic-title').innerHTML = picArray[counter].title;
        counter++;
    } else {
        document.getElementById('pics').src = picArray[0].src;
        document.getElementById('pic-title').innerHTML = picArray[0].title;
        counter = 1;
    }
}

let playingID = 0;

function playSlidedeshow() {
    if (playingID == 0) {
        document.getElementById('playButton').innerHTML = 'STOP';
        playingID = setInterval(changePicture, 2000);
    } else {
        document.getElementById('playButton').innerHTML = 'START';
        clearInterval(playingID);
        playingID = 0;
    }
}