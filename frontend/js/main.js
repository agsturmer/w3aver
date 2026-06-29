const bookmark_button = document.querySelectorAll(".post__bookmark-button")

bookmark_button.forEach(bt => {

    bt.addEventListener("click", function() {
        this.classList.toggle("active")
    })
})


const article_subscribe_button = document.querySelectorAll(".post__subscribe")


article_subscribe_button.forEach(bt => {

    bt.addEventListener("click", function() {

        this.classList.toggle("active")

        if (this.classList.contains("active")) {
            this.innerHTML = `<svg class="post__subscribe-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
 
        } else 
            this.innerHTML = "subscribe" 

    })
})


/*=============================================================================
============================= EXPLORE BOX COLORS ==============================
===============================================================================*/


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

const subscriptions_box = document.getElementById("subscriptions")

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



/*=============================================================================
============================= EXPLORE BOX SEARCH ==============================
===============================================================================*/


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



/*=============================================================================
========================= BOOKMARKS AND SUBSCRIBE =============================
===============================================================================*/


const feed = document.getElementById("feed")
const blog_favicon = document.querySelectorAll(".post__favicon")
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









import { user_sidebar_event } from '/js/user.js';



const create_post_button = document.getElementById("create-post-button")
const settings_button = document.getElementById("settings-button")
const bookmarks_button = document.getElementById("bookmarks-button")


const overlay = document.getElementById("overlay")



create_post_button.addEventListener("click", function() {

    
    user_sidebar_event(overlay, "create-post")  
 
})


bookmarks_button.addEventListener("click", function() {

    
    user_sidebar_event(overlay, "bookmarks")  
 
})


settings_button.addEventListener("click", function() {

    
    user_sidebar_event(overlay, "settings")  
 
})



























