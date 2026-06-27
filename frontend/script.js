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



/*===================================================================
============================= SETTINGS ==============================
====================================================================*/








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


















const widget = document.getElementById("widget")
const widget_title =  document.getElementById("widget-title")
const widget_img =  document.getElementById("widget-img")
const widget_text = document.getElementById("widget-text")
const widget_left_buttom = document.getElementById("widget-left-buttom")
const widget_right_buttom = document.getElementById("widget-right-buttom")
const widget_dots = document.getElementById("widget-dots")

let ads = []


let widget_content_index = 0



function replace_widget_content() {

    widget_title.innerText = ads[widget_content_index].titulo

    widget_img.src = ads[widget_content_index].src

    widget_text.innerText = ads[widget_content_index].texto


    for (let i = 0; i < ads.length; i++) {

        const dot =  widget_dots.children[i]
        
        if (dot === widget_dots.children[widget_content_index]) {

            dot.style.color = 'white'
            
        } else {

           dot.style.color = ''

        }

    }

}


widget_left_buttom.addEventListener(("click"), function() {

    if (ads.length === 0) return


    widget_content_index -= 1

    if (widget_content_index < 0) {

        widget_content_index = (ads.length - 1)
    }

    replace_widget_content()
})

widget_right_buttom.addEventListener(("click"), function() {

    if (ads.length === 0) return
    
    widget_content_index += 1
    
    if (widget_content_index >= ads.length) {

        widget_content_index = 0
    }
    
    replace_widget_content()
})


function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    ads = array

    replace_widget_content()
}

async function load_widget_content() {

    try {
        const response = await fetch('ads/ads.json')
        const response_json = await response.json()
        const dots_index = 0

        


        response_json.forEach((ad) => {

            widget_dots.innerHTML += "<p>.</p>"
        })

        shuffle(response_json)


    }

    catch (error) {
        
        //  AJUSTAR ISSO !!!!!!!!!!!!!!!!!!!!!!!!!!

        /*widget_title.innerText = ads[widget_content_index].titulo

        widget_img.innerHTML = ads[widget_content_index].src

        widget_text.innerText = ads[widget_content_index].texto*/
    }
    
}

load_widget_content()



setInterval(function() {
    

    if (widget_content_index < 0) {

        widget_content_index = (ads.length - 1)

    } else if (widget_content_index >= ads.length) {

        widget_content_index = 0

    } else {

        widget_content_index += 1
    }
    

    replace_widget_content()

}, (10 * 60 * 1000))