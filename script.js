let audio = document.querySelector('audio');
let lyrics = {
    14.5: 'line1',
    24.5: 'line2',
    35.5: 'line3',
    45.5: 'line4',
    53: 'line5',
    58.5: 'line6',
    76.5: 'line7',
    89: 'line8',
    97: 'line9',
    102: 'line10',
    111.5: 'line11',
    129.5: 'line12',
    142.5: 'line13',
    148: 'line14',
    175.5: 'line15',
    193: 'line16',
    196.5: 'line17',
    214: 'line18',
};
audio.addEventListener('timeupdate', function() {
    let time = audio.currentTime;
    for (let t in lyrics) {
        document.getElementById(lyrics[t]).classList.remove('current-line');
    }
    for (let t in lyrics) {
        if (t <= time) {
            document.getElementById(lyrics[t]).classList.add('current-line');
        }
    }
});
for (let time in lyrics) {
    (function(time) {
        document.getElementById(lyrics[time]).addEventListener('click', function() {
            audio.currentTime = time;
        });
    })(time);
}