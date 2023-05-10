const formResult = document.getElementById("form-result");
const nameIn = document.getElementById("name-input");
const phoneNum = document.getElementById("phone");
const mailIn = document.getElementById("mail");
const addressIn = document.getElementById("address");
const userName = document.getElementById("user-name")
const commentEl = document.getElementById("comment-el")
let likedBtn = false;
let likes = 2;

function showResult() {
    if (nameIn.value == "" || phoneNum.value == "" || mailIn.value == "" || addressIn.value == "") {
        formResult.innerHTML = `<P style = "color: red;">Please enter all information.</P>`
    } else {
        formResult.innerHTML = `<P>Alright, ${nameIn.value}. We will call you at ${phoneNum.value} today to define a day to deliver your notebook in ${addressIn.value}.
        Also we will send you our spicial offer at your e-mail ${mailIn.value}. Thank you.</P>`
    }
}
function like(num) {
    if (likedBtn === false) {
        document.getElementById(`like${num}`).innerHTML = "Unlike";
        document.getElementById(`like${num}`).style = "color: var(--blue);";
        likedBtn = true;
    } else {
        document.getElementById(`like${num}`).innerHTML = "Like"
        document.getElementById(`like${num}`).style = "color: initial;";
        likedBtn = false;
    }
}
function commentIt() {
    if (userName.value == "" || commentEl.value == "") {
        document.getElementById("error").innerHTML = "Please enter both your name and your comment";
        document.getElementById("error").style = "color: red; text-align: center;"
    } else {

        document.querySelector("#plus-comment").innerHTML += `<div class="comment">
        <div class="profile">
            <img src="../images/profile.png" alt="person">
            <p>${userName.value}</p>
        </div>
        <p class="comment-show">
            ${commentEl.value}
        </p>
    </div>
    <p onclick="like(${likes})" id="like${likes}">Like</p>
</div>`
        likes++
        document.getElementById("error").innerHTML = "";
    }
}