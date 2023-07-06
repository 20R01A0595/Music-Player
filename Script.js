console.log("welcome to JioSaavn");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let cheapThrills=document.getElementById('cheapThrills');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Cheap Thrills",filePath:"songs/1.mp3",coverPath:"cover/cheapthrills.jpg"},
    {songName:"Taki Taki Dj Snake",filePath:"songs/2.mp3",coverPath:"cover/takitaki.jpg"},
    {songName:"Barso Re",filePath:"songs/3.mp3",coverPath:"cover/barsore.jpg"},
    {songName:"Na Roja Nuvve",filePath:"songs/4.mp3",coverPath:"cover/kushi.jpg"},
    {songName:"Andhame Athivai Vasthe",filePath:"songs/5.mp3",coverPath:"cover/sulthan.jpg"},
    {songName:"Chogada Tara",filePath:"songs/6.mp3",coverPath:"cover/chogadtara.jpg"},
    {songName:"Urike Urike",filePath:"songs/7.mp3",coverPath:"cover/urike.jpg"},
    {songName:"Tere Vasthe",filePath:"songs/8.mp3",coverPath:"cover/terevasthe.jpg"},
    {songName:"Maate Vinaduga",filePath:"songs/9.mp3",coverPath:"cover/maatevinaduga.jpg"},
    {songName:"Chendrullo Unde Kundelu",filePath:"songs/10.mp3",coverPath:"cover/chendrullo.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{ 
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>
    {
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.currentTime=0;
        cheapThrills.innerText=songs[songIndex].songName;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    cheapThrills.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    cheapThrills.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

