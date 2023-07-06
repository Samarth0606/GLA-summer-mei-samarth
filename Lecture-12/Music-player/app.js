
let playBtn = document.querySelector('#play-btn');
let progress = document.querySelector('#progress');
let songList = document.querySelector('#song-list');

let songs = [
    {
        id: 1,
        name:'song1'
    },
    {
        id: 2,
        name:'song2'
    },
    {
        id: 3,
        name:'song3'
    },
    {
        id: 4,
        name:'song4'
    }
]

let audio = new Audio('./assets/song1.mp3');


// song show in ul
for(let song of songs){
    let li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id' , song.id);
    li.classList.add('song-item');
    songList.append(li);
}

// play btn click

playBtn.addEventListener('click', function(){
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-circle-play')){
        playBtn.children[0].classList.remove('fa-circle-play');
        playBtn.children[0].classList.add('fa-circle-pause');
    }
    else{
        playBtn.children[0].classList.add('fa-circle-play');
        playBtn.children[0].classList.remove('fa-circle-pause');
    }
})


// current time dekho

audio.addEventListener('timeupdate' , function(){
    let currentProgress = audio.currentTime * 100 / audio.duration;
    progress.value = currentProgress;
})

// khud se input change

progress.addEventListener('change' , function(){
    let updatedTime = audio.duration / 100 * progress.value;
    audio.currentTime = updatedTime;
})


// khud se select kro gaane

songList.addEventListener('click' , function(e){
    let songId = e.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');
})



















