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


const new_post_section = document.createElement("section")


new_post_section.style.height = "100vh"
new_post_section.style.width = "100vw"
new_post_section.style.zIndex = "100"
new_post_section.style.position = "absolute"
new_post_section.style.top = "0"
new_post_section.style.right = "0"
new_post_section.style.backgroundColor = "#0f0f15"


new_post_button.addEventListener("click", function() {


    new_post_section.innerHTML = "<p>Settings</p>"
    body.append(new_post_section)

    
})