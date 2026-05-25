const heart_button = document.querySelectorAll(".up-button")

heart_button.forEach(bt => {

    bt.addEventListener("click", function() {
        this.classList.toggle("active")
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

let subscriptions_box_option = true

let explore_box_option = true



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
    language_select.focus();
    language_select.style.display = "none"

});