export function explore_box_appearance() {


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
}

/*=============================================================================
============================= EXPLORE BOX SEARCH ==============================
===============================================================================*/

export function explore_box_output() {


    const explore_box_input = document.getElementById("explore-box-input")
    const explore_box = document.getElementById("explore-box")

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

}