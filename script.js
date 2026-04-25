
const left_box = document.getElementById("left-box") 
const left_box_button = document.querySelectorAll(".left-box-button")
//const sponsor_section = document.getElementById("sponsor-section")
const sub_bt = document.getElementById("sub-bt")
const exp_bt = document.getElementById("exp-bt")
const set_bt = document.getElementById("set-bt")
const search_input = document.getElementById("search-input")
const minimize_button = document.getElementById("minimize-button")
const profile_section = document.getElementById("profile-section")
const profile_items = document.querySelectorAll("#profile-section > *");
const profile_img = document.getElementById("profile-img")
const right_box = document.getElementById("right-box")
const search = document.getElementById("search")




minimize_button.addEventListener('click', () => {

    if (profile_img.style.display !== "none") {

        profile_items.forEach(item => { if (item.id !== "minimize-button") { item.style.display = "none" }})
        profile_section.style.height = "18px"
        minimize_button.innerText = "+"
        right_box.style.gap = "0px"
        profile_section.style.borderBottom = "0px solid rgba(255, 255, 255, 0.208)"

    } else {

        profile_items.forEach(item => { if (item.id !== "minimize-button") { item.style.display = "flex" }})
        profile_section.style.height = "220px"
        profile_section.style.borderBottom = "1px solid rgba(255, 255, 255, 0.208)"
        minimize_button.style.width = "100%"
        minimize_button.innerText = "-"
        right_box.style.gap = "5px"
    }

})