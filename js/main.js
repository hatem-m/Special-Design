let landing = document.querySelector(".landing-page");
let backgroundArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","07.jpg","08.jpg","09.jpg"];
let backgroundIndex = 0;
let randomBackgroun = true;
let t = setInterval(function(){
    if(randomBackgroun){
        landing.style.cssText = `background-image: url(../images/${backgroundArray[backgroundIndex]});`;
    if(backgroundIndex == 7){
        backgroundIndex = 0;
    }
    else {
        backgroundIndex++;
    }
    }
},12000);

// settings

let icon = document.querySelector(".settings .icon");
let settings = document.querySelector(".settings");
icon.addEventListener("click",function(){
    if(icon.classList.contains("active")){
        icon.classList.remove("active");
        settings.style.cssText = "transform: translateX(-100%);";
    }
    else{
        icon.classList.add("active");
        settings.style.cssText = "transform: translateX(0);";
    }
})
// settings colors
let colors = document.querySelectorAll(".settings .colors div span");
colors.forEach(function(element){
    element.onclick = function(){
        document.documentElement.style.setProperty("--main-color",`${this.dataset.color}`)
    }
})
// settings random-background
let randomBackgroundYes = document.querySelector(".settings .random-background .yes");
let randomBackgroundNo = document.querySelector(".settings .random-background .no");
randomBackgroundYes.onclick = function(){
    // randomBackgroundYes.classList.remove("active");
    randomBackgroundYes.classList.add("active");
    randomBackgroundNo.classList.remove("active");
    randomBackgroun = true;
}
randomBackgroundNo.onclick = function(){
    // randomBackgroundNo.classList.remove("active");
    randomBackgroundNo.classList.add("active");
    randomBackgroundYes.classList.remove("active");
    randomBackgroun = false;
}
// settings show-bullets
let showBulletsYes = document.querySelector(".settings .show-bullets .yes");
let showBulletsNo = document.querySelector(".settings .show-bullets .no");
let bullets = document.querySelector("body .bullets")
showBulletsYes.onclick = function(){
    // showBulletsYes.classList.remove("active");
    showBulletsYes.classList.add("active");
    showBulletsNo.classList.remove("active");
    console.log(bullets)
    bullets.classList.remove("display-none");
}
showBulletsNo.onclick = function(){
    // showBulletsNo.classList.remove("active");
    showBulletsNo.classList.add("active");
    showBulletsYes.classList.remove("active");
    bullets.classList.remove("display-none");
    bullets.classList.add("display-none");

    // setting reset
    let reset = document.querySelector(".settings .reset");
    reset.onclick = function(event){
        event.preventDefault();
        randomBackgroundYes.classList.add("active");
        randomBackgroundNo.classList.remove("active");
        randomBackgroun = true;
        showBulletsYes.classList.add("active");
        showBulletsNo.classList.remove("active");
        console.log(bullets)
        bullets.classList.remove("display-none");
    }
}

// nav
let navIcon = document.querySelector(".landing-page .header .nav .nav-icon");
let navUl = document.querySelector(".landing-page .header .nav ul");
navIcon.onclick = function(){
    navUl.classList.toggle("open-ul")
}

// our-skills

let ourSkills = document.querySelector(".our-skills");
let skillSpanProgress = document.querySelectorAll(".our-skills .skills .skill .progress span");
window.onscroll = function(){
    if(window.scrollY >= (ourSkills.offsetTop - 250)){
        skillSpanProgress.forEach((element)=>{
            element.style.width = element.getAttribute("data-progress")
        })
    }
    else{
        skillSpanProgress.forEach((element)=>{
    element.style.width = 0;})
    }
}