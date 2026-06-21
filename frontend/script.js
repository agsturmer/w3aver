/*const heart_button = document.querySelectorAll(".heart-button")

heart_button.forEach(bt => {

    bt.addEventListener("click", function() {
        this.classList.toggle("active")
    })
})*/

const bookmark_button = document.querySelectorAll(".bookmark-button")

bookmark_button.forEach(bt => {

    bt.addEventListener("click", function() {
        this.classList.toggle("active")
    })
})


const article_subscribe_button = document.querySelectorAll(".article-subscribe-button")


article_subscribe_button.forEach(bt => {

    bt.addEventListener("click", function() {

        this.classList.toggle("active")

        if (this.classList.contains("active")) {
            this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
 
        } else 
            this.innerHTML = "subscribe" 

    })
})






const explore_box_button = document.getElementById("explore-box").querySelectorAll("button")


explore_box_button.forEach(bt => {

bt.addEventListener("mouseenter", function() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = 100;
    let lightness = 40 

   this.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`; `hsl(${hue}, ${saturation}%, ${lightness}%)`;
});

bt.addEventListener("mouseleave", function() {

    this.style.backgroundColor = "#181820"
})


})





const subscriptions_button = document.getElementById("sub-bt")

const explore_button = document.getElementById("exp-bt")

const explore_box = document.getElementById("explore-box")

const subscriptions_box = document.getElementById("subscriptions-box")

let subscriptions_box_option
let explore_box_option


if (subscriptions_box.querySelectorAll("button").length > 0) {

    subscriptions_box_option = true
    explore_box_option = false
    explore_box.style.display = "none"

    subscriptions_button.querySelector("p").style.color = "white"
    subscriptions_button.querySelector("svg").style.color = "white"

} else {

    subscriptions_box_option = false
    explore_box_option = true
    subscriptions_box.style.display = "none"

    explore_button.querySelector("p").style.color = "white"
    explore_button.querySelector("svg").style.color = "white"

}










subscriptions_button.addEventListener("click", function() {

    if (subscriptions_box_option) {

        subscriptions_box.style.display = "none"
        subscriptions_button.querySelector("p").style.color = ""   
        subscriptions_button.querySelector("svg").style.color = "" //tirar svg futuramente 
        subscriptions_box_option = false





    } else {

        subscriptions_box.style.display = "flex"
        subscriptions_button.querySelector("p").style.color = "white"
        subscriptions_button.querySelector("svg").style.color = "white"
        subscriptions_box_option = true

        explore_box.style.display = "none"
        explore_button.querySelector("p").style.color = ""  
        explore_button.querySelector("svg").style.color = ""  
        explore_box_option = false

        
    }
})

explore_button.addEventListener("click", function() {

    if (explore_box_option) {

        explore_box.style.display = "none"
        explore_button.querySelector("p").style.color = ""  
        explore_button.querySelector("svg").style.color = ""  
        explore_box_option = false

    } else {

        explore_box.style.display = "block"
        explore_button.querySelector("p").style.color = "white"
        explore_button.querySelector("svg").style.color = "white" 
        explore_box_option = true

        subscriptions_box.style.display = "none"
        subscriptions_button.querySelector("p").style.color = ""   
        subscriptions_button.querySelector("svg").style.color = "" //tirar svg futuramente 
        subscriptions_box_option = false
        
    }
})


const new_post_button = document.getElementById("new-bt")

const notifications_button = document.getElementById("not-bt")

const settings_button = document.getElementById("set-bt") 

const boomarks_button = document.getElementById("boo-bt")


const body = document.body


const settings_section = document.getElementById("settings")
const new_post_section = document.getElementById("new-post")
const boomarks_section = document.getElementById("bookmarks")
const notifications_section = document.getElementById("notifications")

notifications_button.addEventListener("click", function() { 

    notifications_section.style.display = "flex"
    body.style.overflowY = "hidden"

})

boomarks_button.addEventListener("click", function() { 

    boomarks_section.style.display = "flex"
    body.style.overflowY = "hidden"

})



new_post_button.addEventListener("click", function() { 

    new_post_section.style.display = "flex"
    body.style.overflowY = "hidden"


})

settings_button.addEventListener("click", function() {


    settings_section.style.display = "flex"
    body.style.overflowY = "hidden"
    
})


go_back_button = document.querySelectorAll(".go-back-button")

go_back_button.forEach((e) => {

    e.addEventListener("click", function() {

        e.parentElement.style.display = "none"
        body.style.overflowY = "auto"
        
    })

})





/*===================================================================
============================= SETTINGS ==============================
====================================================================*/


const dark_mode_div = document.getElementById("dark-mode-div")
const light_mode_div = document.getElementById("light-mode-div")
const font_size_div = document.getElementById("font-size-div")
const language_div = document.getElementById("language-div") 

dark_mode_div.addEventListener('click', function() {
    const dark_mode_radio = dark_mode_div.querySelector('input[type="radio"]')
    dark_mode_radio.checked = true;
});

light_mode_div.addEventListener('click', function() {
    const light_mode_radio = light_mode_div.querySelector('input[type="radio"]')
    light_mode_radio.checked = true;
});


font_size_div.addEventListener('click', function() {
    const font_size_input = font_size_div.querySelector('input[type="number"]')
    font_size_input.focus();
});

language_div.addEventListener('click', function() {
    const language_select = language_div.querySelector('select')
    language_select.showPicker();
    

});







const explore_box_input = document.getElementById("explore-box-input")


explore_box_input.addEventListener("input", function () {

    const explore_box_tags = explore_box.querySelectorAll('button')
    const explore_box_input_value = this.value.trim().toLocaleLowerCase()

    if (explore_box_input_value != "") {

        explore_box_tags.forEach((e) => {

        if (e.innerText.trim().toLocaleLowerCase().includes(explore_box_input_value)) {

            e.style.display = "inline-block"
        } else {

            e.style.display = "none"
        }

        }) 


    }  else {

        explore_box_tags.forEach((e) => {

            e.style.display = "inline-block"

        })
        
    }

}) 


const feed = document.getElementById("feed")

const blog_favicon = document.querySelectorAll(".blog-favicon")
const profiles = document.getElementById("profiles")














function profile_bookmarks_and_subscribe() {


    const bookmark_button = document.querySelectorAll(".bookmark-button")

    bookmark_button.forEach(bt => {

        bt.addEventListener("click", function() {
            this.classList.toggle("active")
        })
    })

    
    const article_subscribe_button = document.querySelectorAll(".article-subscribe-button")


    article_subscribe_button.forEach(bt => {

        bt.addEventListener("click", function() {

            this.classList.toggle("active")

            if (this.classList.contains("active")) {
                this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
    
            } else 
                this.innerHTML = "subscribe" 

        })
    })
}




blog_favicon.forEach((e) => {

    e.addEventListener("click", function () {

        feed.innerHTML = `
        
       
     
<div id="profiles-feed">

    <div id="profiles-top-background"></div>

    <button id="profiles-top">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>

        <h2>doritos.com</h2>

    </button>

     <div id="profiles-middle">


        

       <div id="profiles-buttons">

       <img src="imgs/1.jpg" id="profile-favicon">

            <button id="subscribe">Subscribe</button>
            <button id="block">Hide</button>
            <button id="flag"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5"/></svg></button>
        </div>


        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </p>


        <div id="profile-tags">
            <button>Games</button>
            <button>Movies</button>
            <button>TV Shows</button>
            <button>Anime</button>
            <button>Manga</button>
            <button>Comics</button>
            <button>Music</button>
            <button>K-Pop</button>
            <button>Board Games</button>
            <button>RPG</button>
            <button>Streaming</button>
        </div>

    </div>
            <article class="feed-item">
            <div class="article-profile">
                <div class="article-profile-left">
                    <img src="imgs/1.jpg" class="blog-favicon">
                    <a>doritos.com</a>
                </div>
                <button class="article-subscribe-button">subscribe</button>
            </div>
            <h2 class="article-title">teste título teste titulo teste titulo</h2>
            <img src="imgs/img.jpg" class="article-img">
            <div class="article-bottom">
                <time class="article-data">1d ago</time>
                <button class="bookmark-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
                </button>
            </div>
        </article> 


            <article class="feed-item">
            <div class="article-profile">
                <div class="article-profile-left">
                    <img src="imgs/1.jpg" class="blog-favicon">
                    <a>doritos.com</a>
                </div>
                <button class="article-subscribe-button">subscribe</button>
            </div>
            <h2 class="article-title">teste título teste titulo teste titulo</h2>
            <img src="imgs/img.jpg" class="article-img">
            <div class="article-bottom">
                <time class="article-data">3y ago</time>
                <button class="bookmark-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
                </button>
            </div>
        </article> `

        profile_bookmarks_and_subscribe()


    })
})





