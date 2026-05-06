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

