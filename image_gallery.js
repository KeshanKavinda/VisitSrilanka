const albumArt1 = document.getElementById("albumArt1")
const albumArt2 = document.getElementById("albumArt2")
const albumArt3 = document.getElementById("albumArt3")
const albumArt4 = document.getElementById("albumArt4")
const albumArt5 = document.getElementById("albumArt5")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const albumInfoPic =  document.getElementById("albumInfoPic")
const albumDesc =  document.getElementById("albumDesc")

const albums = {
    album1:{
        image: "assets/img/imgmap1.jpg",
        desc: "An ancient stronghold and palace called Sigiriya is situated in Sri Lanka's central Matale District. It was constructed by King Kashyapa in the 5th century AD.Beautiful water gardens, moats, and terraced gardens line the perimeter of the stronghold, which is thought to be one of Sri Lanka's best examples of ancient urban planning. "
    },
    album2:{
        image: "assets/img/imgmap2.jpg",
        desc: "Ella village of salubrious climate nestles amidst hill after hill of tea plantations bringing in panoramic views of the Central Highlands of Sri Lanka.Ella gap drop down nearly 1000 meters over the ridge of Central Highlands to bring in a telescopic view of the Great Plains as far as the southern coast of Sri Lanka."
    },
    album3:{
        image: "assets/img/imgmap3.jpg",
        desc: "Arugam bay is considered the undisputed best surfing beach in Sri Lanka. Lying hidden in the laid back eastern coast. Arugam Surf Point is a small bay which has a very long, consistent, section-like right hand breaks.Arugam Bay has become one of the most sought after location for surfaces round the world. "
    },
    album4:{
        image: "assets/img/imgmap4.jpg",
        desc: "Once you reach Horton plains you can visit the “Worlds End” which is a 4000 feet straight vertical drop.This drop can be covered with mist most of the time the and the best time to be up at the worlds end is towards the afternoon.Other than the gorgeous weather, flora and fauna of Horton Plains, one of the most popular activity is the hike"
    },
    album5:{
        image: "assets/img/imgmap5.jpg",
        desc: "The beautiful city of Galle beholds a history from ancient past.The one thing no invasion, development or influence could reach was the natural beauty of its beach. The city of Galle which was originally formed by Portuguese in the 16th century reached its development in the 18th century and was later influenced by the British."
    },
}

const fontsSizes = {
    small: "65%",
    medium: "70%",
    large: "75%"
}

function changeFont(size){ 
    document.querySelector('*').style.fontSize = fontsSizes[size]
 }

albumArt1.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album1.image
    albumDesc.innerText = albums.album1.desc
})

albumArt2.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album2.image
    albumDesc.innerText = albums.album2.desc
})

albumArt3.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album3.image
    albumDesc.innerText = albums.album3.desc
})

albumArt4.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album4.image
    albumDesc.innerText = albums.album4.desc
})

albumArt5.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album5.image
    albumDesc.innerText = albums.album5.desc
})

const themes = ["blue","purple","green"]

function changeTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)
}

function changeThemeRandom(){
    document.documentElement.setAttribute("data-theme", themes[getRandomInt(2)])
}