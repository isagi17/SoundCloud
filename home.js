function openTab(tabname){
    let navlists = document.getElementsByClassName("navlist");
    for(navlist of navlists){
        navlist.classList.remove("active-tab");
    }
        event.currentTarget.classList.add("active-tab");
        document.getElementById(tabname).classList.add(navlist);
}
var sidemeu = document.getElementById("sidemenu");

function openMenu(){
    sidemeu.style.left = "0";
}

function closeMenu(){
    sidemeu.style.left = "-400px";
}

const sliders = () => {
    const musicList = document.querySelector(".slideWrapper .slides");
    const slideButtons = document.querySelectorAll(".slideWrapper .slideBtn");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prevBtn" ? -1 : 1;
            const scrollAmount = musicList.clientWidth * direction;
            musicList.scrollBy({left: scrollAmount, behavior: "smooth"});
        })
    })
}

window.addEventListener("load", sliders);

const progressBar = document.getElementById("progressBar")
const ctrlIcon = document.getElementById("ctrlIcon");
const activesong = document.querySelector(".active-song");

const active = activesong.id;

function activeSong(songName){
    const songLists = document.getElementsByClassName("song");
    const musicLists = document.getElementsByClassName("music");
    const activesong = document.querySelector(".active-song");
    const picture = document.querySelector(".playingTrackPicture");
    const active = activesong.id;

    const song = document.getElementById("song");
    for(songlist of songLists){
        songlist.classList.remove("active-song");
    }
    for(musicList of musicLists){
        musicList.classList.remove("active-song");
    }
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    event.currentTarget.classList.add("active-song")
    document.getElementById("title").innerHTML = event.currentTarget.innerText;
    for(let i=0; i<songObj.length; i++){
        if(event.currentTarget.innerText === songObj[i].title)
        {
            picture.style.background = "url(" + songObj[i].picture + ")";
            picture.style.backgroundRepeat = "no-repeat";
            picture.style.backgroundPosition = "center";
            
        }
    }
    song.src = songName;
    song.play();
}

const songObj = [
    { id:1, song:"Music/Play Dead - NEFFEX.mp3", title:"Play Dead", picture:"painting-mountain-lake-with-mountain-background_188544-9126.avif" },
    { id:2, song:"Music/El Billete - Edgar Lopez and Quincas Moreira.mp3", title:"El Billete", picture:"360_F_555824600_OvpqblejjhjExcDDulsWkY3RxDrAr2hF.jpg" },
    { id:3, song:"Music/AETHER - Density & Time.mp3", title:"AETHER", picture:"images.jpg" },
    { id:4, song:"Music/Sonsa - Quincas Moreira.mp3", title:"Bossa Sonsa", picture:"ultra-detailed-nebula-abstract-wallpaper-4_1562-749.avif"},
    { id:5, song:"Music/EBB - Density & Time.mp3", title:"EBB", picture:"pexels-pixabay-531756.jpg"},
    { id:6, song:"Music/Forest Find - TrackTribe (1).mp3", title:"Forest Find", picture:"beautiful-sky-background-and-wallpaper-of-white-and-gray-clouds-in-blue-sky-free-photo.jpg"},
    { id:7, song:"Music/TRAVELATOR - Density & Time.mp3", title:"TRAVELATOR", picture:"360_F_526854857_FFbu7oodabYdX5GaePaE6VrE0I5xGzYR.jpg"},
    { id:8, song:"Music/TORSION - Density & Time.mp3", title:"TORSION", picture:"painting-mountain-lake-with-mountain-background_188544-9126.avif"},
    { id:9, song:"Music/SPRING OF DECEPTION - Density & Time.mp3", title:"SPRING OF DECEPTION", picture:"360_F_555824600_OvpqblejjhjExcDDulsWkY3RxDrAr2hF.jpg"},
    { id:10, song:"Music/PELAGIC - Density & Time.mp3", title:"PELAGIC", picture:"images.jpg"},
    { id:11, song:"Music/ Nurture - Quincas Moreira.mp3", title:"Nature Nurture", picture:"ultra-detailed-nebula-abstract-wallpaper-4_1562-749.avif"},
    { id:12, song:"Music/LITE BRITE - Density & Time.mp3", title:"LITE BRITE", picture:"pexels-pixabay-531756.jpg"},
    { id:13, song:"Music/Lazy Laura - Quincas Moreira.mp3", title:"Lazy Laura", picture:"beautiful-sky-background-and-wallpaper-of-white-and-gray-clouds-in-blue-sky-free-photo.jpg"},
    { id:14, song:"Music/La Docerola - Quincas Moreira.mp3", title:"La Docerola", picture:"360_F_526854857_FFbu7oodabYdX5GaePaE6VrE0I5xGzYR.jpg"},
    { id:15, song:"Music/July - John Patitucci.mp3", title:"July", picture:"painting-mountain-lake-with-mountain-background_188544-9126.avif"},
    { id:16, song:"Music/Hotlanta - Track Tribe.mp3", title:"Hotlanta", picture:"360_F_555824600_OvpqblejjhjExcDDulsWkY3RxDrAr2hF.jpg"},
    { id:17, song:"Music/GROWTH_DECAY - Density & Time.mp3", title:"GROWTH_DECAY", picture:"images.jpg"},
    { id:18, song:"Music/Funky Carioca - Quincas Moreira.mp3", title:"Funky Carioca", picture:"ultra-detailed-nebula-abstract-wallpaper-4_1562-749.avif"},
];

const nextPrev = () => {
    const songs = document.querySelectorAll(".song");
    const nextPrev = document.querySelectorAll(".nextPrev");
    const picture = document.querySelector(".playingTrackPicture");
    let direction;
    let res;

    nextPrev.forEach(button => {
        button.addEventListener("click", () => {
            for(let i=0; i<songs.length; i++){
                if(songs[i].classList.contains("active-song")){
                        direction = button.id === "prev" ? -1 : +1;
                        let hold = i;
                        res = hold+direction;
                        if(res < 0 || res > songs.length - 1){
                            break;
                        }
                        else{
                            songs[i].classList.remove("active-song");
                            songs[res].classList.add("active-song");
                            ctrlIcon.classList.add("fa-pause");
                            ctrlIcon.classList.remove("fa-play");
                            song.src = songObj[res].song;
                            song.play();
                            picture.style.background = "url(" + songObj[res].picture + ")";
                            picture.style.backgroundRepeat = "no-repeat";
                            picture.style.backgroundPosition = "center";
                            //picture.style.backgroundBlendMode = "darken";
                            document.getElementById("title").innerHTML = songs[res].innerText;
                            break;
                        }
                }
                /*if(musics[i].classList.contains("active-song")){
                    direction = button.id === "prev" ? -1 : +1;
                    musics[i].classList.remove("active-song");
                    let hold = i;
                    res = hold+direction;
                    musics[res].classList.add("active-song");
                    song.src = songObj[res].song;
                    song.play();
                    document.getElementById("title").innerHTML = songs[res].innerText;
                    break;
                }*/
            }
        })
    })
}
window.addEventListener("load", nextPrev);

progressBar.onchange = function(){
    song.play();
    song.currentTime = progressBar.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

song.onloadedmetadata = function(){
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
}

function myPausePlay(){
    const activesong = document.querySelector(".active-song");
    const active = activesong.id;

    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.src = active;
        song.play();    
        song.currentTime = progressBar.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    song.pause();
    setInterval(()=>{
        progressBar.value = song.currentTime;
    },500);
}

const songArr = [
    "Play Dead",
    "El Billete",
    "AETHER",
    "Bossa Sonsa",
    "EBB",
    "Forest Find",
    "TRAVELATOR",
    "TORSION",
    "SPRING OF DECEPTION",
    "PELAGIC",
    "Nature Nurture",
    "LITE BRITE",
    "Lazy Laura",
    "La Docerola",
    "July",
    "Hotlanta",
    "GROWTH_DECAY",
    "Funky Carioca"
];

function logOut(){
    window.location.href = "logIn.html";
}

const search = document.getElementById("search");
const results = document.querySelector(".result");

search.onkeyup = function() {
    const results = document.querySelector(".result");
    results.style.top = "0px";
    const res = search.value;
    let result = [];
    if(res.length != 0){
        result = songArr.filter(filter => {
            return filter.toLowerCase().includes(res.toLowerCase());
        });
    }else{
        results.style.top = "-1000px"
    }
    display(result);
}

function display(result){
    const content = result.map(list => {
        return "<li onclick=searchClick(this)>" + list + "</li>";
    })
    results.innerHTML = "<ul class='results'>" + content.join('') + "</ul>";
}

function searchClick(searchSong){
    const results = document.querySelector(".results");
    for(let i=0; i<songObj.length; i++){
        if(searchSong.innerText === songObj[i].title){
            song.src = songObj[i].song;
            song.play();
            results.style.position = "absolute";
            results.style.top = "-1000px";
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
            document.getElementById("title").innerHTML = songObj[i].title;
        }
    }
}
