console.log("Hello from JavaScript!");
const songList = [
{
imageLink:"./assets/olivia.jpg",
title:"Brutal",
album:"Sour",
duration:"2:54"
},
{
    imageLink:"./assets/chase atlantic.jpg",
    title:"Friends",
    album:"Nostalgia",
    duration:"3:51"
},
{
    imageLink:"./assets/theweeknd.jpg",
    title:"The hills",
    album:"Beauty behind madness",
    duration:"4:03"
},
];

window.onload = function() {
    const songsWrapper = document.getElementById("songs-wrapper");
    songsWrapper.innerHTML="";
    for (let i =0; i< songList.length; i++)
    {
        songsWrapper.innerHTML += melodyComponent(i + 1, songList[i]);
    }
}

const melodyComponent = function (index, songInfo) 
{
    return `<div class="melody">
    <span class="songs-nr">
        ${index}
     </span>
     <img src="${songInfo.imageLink}" class="song-cover">
    </img>
     <span class="song-title">
        ${songInfo.title}
     </span>
     <span class="song-album">
       ${songInfo.album}
     </span>
     <span class="song-duration">
       ${songInfo.duration}
     </span>
 </div>`
}