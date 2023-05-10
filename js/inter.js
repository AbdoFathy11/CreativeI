const shw = document.getElementById("trn");
const lst = document.getElementById("list");
const transBtn1 = document.getElementById("trans-btn1");
const transBtn2 = document.getElementById("trans-btn2");
const transBtn3 = document.getElementById("trans-btn3");
const transHeading = document.getElementById("trans-heading");
const transP = document.getElementById("trans-p")
const rootEl = document.querySelector(":root");
const landingCover = document.querySelector("#landing-cover");
const Swtch = document.querySelector("#swtch");
const switchP = document.getElementById("switch-p")
const buy1Btn = document.querySelector(".buy1")
const buy2Btn = document.querySelector(".buy2")
const buy3Btn = document.querySelector(".buy3")
const buy4Btn = document.querySelector(".buy4")
const buy5Btn = document.querySelector(".buy5")
const buy6Btn = document.querySelector(".buy6")
const buy7Btn = document.querySelector(".buy7")
const buy8Btn = document.querySelector(".buy8")
const buy9Btn = document.querySelector(".buy9")
const buy10Btn = document.querySelector(".buy10")
const buy11Btn = document.querySelector(".buy11")
const buy12Btn = document.querySelector(".buy12")
const buy13Btn = document.querySelector(".buy13")
let fliped = false
let hidden = false
let Dark = false


function dwn() {
    if (lst.className == "") {
        Dwn()
    } else if ((lst.className == "list")) {
        Up()
    }
}
function Up() {
    lst.className = ""
    shw.style = "transform: rotate(-2turn)";
    lst.style = "display: none";
}
function Dwn() {
    lst.className = "list"
    shw.style = "transform: rotate(2turn)";
    lst.style = "display: block";
}
function flipy(no) {
    if (fliped == false) {
        document.querySelector(`.No${no}`).style = "transform: rotateY(-180deg) translateX(100%)"
        fliped = true
    } else {
        document.querySelector(`.No${no}`).style = ""
        fliped = false
    }
}
function hideIt() {
    if (hidden == true) {
        for (let i = 5; i < 14; i++) {
            document.querySelector(`.No${i}`).style.display = "none"
        }
        document.querySelector(`.more`).innerHTML = "More.."
        hidden = false
    } else {
        for (let i = 5; i < 14; i++) {
            document.querySelector(`.No${i}`).style.display = "block"

        }
        document.querySelector(`.more`).innerHTML = "Less.."
        hidden = true
    }
}
function amActiveBtn1() {
    if (transBtn1.className == "active") {

    } else {
        transBtn1.className = "active"
        transBtn2.className = ""
        transBtn3.className = ""
        transHeading.innerHTML = "Who are we?"
        transP.innerHTML = "We are a team of desingers and notebook makers specialized in make you comfortable to use a nice-looking notebook. We can provide you with notebook covered with an image of your\
        favorite artist, TV show and anime. We also can provide a cool notebook cover with your own picture, your lovely pet, a person you like,\
        your own design and you cool art -like (digital art, pencil or colors drowin, paints)- and we're glade to serve you."
    }
}
function amActiveBtn2() {
    if (transBtn2.className == "active") {

    } else {
        transBtn2.className = "active"
        transBtn1.className = ""
        transBtn3.className = ""
        transHeading.innerHTML = "Why us?"
        transP.innerHTML = "We make high-quality notebooks with eye cany on the cover. The most isse we care about it is our customer. Your comfort and happiness is realy matter for us.\
        Our notebooks made by a blastic cover and it's never get wet. We prefer to use high quality paper 80gm thet make you comfotable while writing on it with any type of pens or pencils.\
         We can understant your desire to design your special notebook."
    }
}
function amActiveBtn3() {
    if (transBtn3.className == "active") {

    } else {
        transBtn3.className = "active"
        transBtn2.className = ""
        transBtn1.className = ""
        transHeading.innerHTML = "Know more."
        transP.innerHTML = `<ul>

        <li>
        We provide high-quality notebooks with a cool-looking cover.
        </li>
        
        <li>
        We sometime make good offers, just keep on date.
        </li>
        
        <li>
        We deliver your spicial notebook near to your home.
        </li>
        
        <li>
        We can design a special design for you only.
        </li>
        
        <li>
        We also make a notebook coverd with your own pictuer or your art. BE CREATIVE.
        </li>
        
        </ul>`
    }
}
function switchy() {
    if (Dark == false) {
        rootEl.style.setProperty("--blue", "#18085d");
        document.querySelector("body").style = 'background-color:#080126;';
        document.querySelector(".about").style = 'background-image: none;';
        document.querySelector(".contact").style = 'background-image: none;';
        landingCover.src = "images/Dark-Cover.jpg";
        landingCover.style = "opacity: 20%;";
        Swtch.src = "images/Light.png"
        switchP.innerHTML = "Light Mood"
        switchP.style = "color:#ffaa81;"
        document.getElementById("burger-dark").innerHTML = "Light"
        Dark = true
        buy1Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Attack/Dark/index.html"
        buy2Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/DeathNote/Dark/index.html"
        buy3Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Maro/Dark/index.html"
        buy4Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/abyu/Dark/index.html"
        buy5Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/shelby/Dark/index.html"
        buy6Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/cairokee/Dark/index.html"
        buy7Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/one%20pice/Dark/index.html"
        buy8Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/lege/Dark/index.html"
        buy9Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/la%20casa/Dark/index.html"
        buy10Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/wegz/Dark/index.html"
        buy11Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/mosa/Dark/index.html"
        buy12Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/BTS/Dark/index.html"
        buy13Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Pablo/Dark/index.html"

    } else {
        rootEl.style.setProperty("--blue", "#00cdff");
        document.querySelector("body").style = 'background-color:#e9fbff;';
        document.querySelector(".about").style = 'background-image: linear-gradient(#00ccff17, #e9fbff);';
        document.querySelector(".contact").style = 'background-image: linear-gradient(#00ccff17, #e9fbff);';
        landingCover.src = "images/Cover.jpg";
        landingCover.style = "opacity: 100%;";
        Swtch.src = "images/Dark Mood.png"
        switchP.innerHTML = "Dark Mood"
        switchP.style = "color:#000033;"
        document.getElementById("burger-dark").innerHTML = "Dark"
        Dark = false
        buy1Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Attack/light/index.html"
        buy2Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/DeathNote/light/index.html"
        buy3Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Maro/light/index.html"
        buy4Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/abyu/light/index.html"
        buy5Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/shelby/light/index.html"
        buy6Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/cairokee/light/index.html"
        buy7Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/one%20pice/light/index.html"
        buy8Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/lege/light/index.html"
        buy9Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/la%20casa/light/index.html"
        buy10Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/wegz/light/index.html"
        buy11Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/mosa/light/index.html"
        buy12Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/BTS/light/index.html"
        buy13Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Pablo/light/index.html"
    }
}
buy1Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Attack/light/index.html"
buy2Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/DeathNote/light/index.html"
buy3Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Maro/light/index.html"
buy4Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/abyu/light/index.html"
buy5Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/shelby/light/index.html"
buy6Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/cairokee/light/index.html"
buy7Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/one%20pice/light/index.html"
buy8Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/lege/light/index.html"
buy9Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/la%20casa/light/index.html"
buy10Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/wegz/light/index.html"
buy11Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/mosa/light/index.html"
buy12Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/BTS/light/index.html"
buy13Btn.href = "file:///D:/Creativ%20I%20Website%20Modufyed/Buy/Pablo/light/index.html"