

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
        const response = await fetch('../ads/ads.json')
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