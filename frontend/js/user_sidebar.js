async function load_create_post_html(overlay, view_name) {

    try {

        const html = await fetch(`views/${view_name}.html`)

        const html_text = await html.text()

        const parser = new DOMParser();

        const doc = parser.parseFromString(html_text, 'text/html')

        overlay.innerHTML = doc.body.innerHTML;

        overlay.style.display = "flex"

        document.body.style.overflowY = "hidden";

        history.pushState({}, '', `${view_name}`)
    
        const go_back_button = document.getElementById("go-back-button")

        go_back_button.addEventListener("click", function() {

            overlay.style.display = "none"
            document.body.style.overflowY = "auto";
            history.pushState({}, '', '')  

        })

    } catch (error) {

        console.error(error);
    }

}



export function user_sidebar_event() {

    const create_post_button = document.getElementById("create-post-button")
    const settings_button = document.getElementById("settings-button")
    const bookmarks_button = document.getElementById("bookmarks-button")
    const overlay = document.getElementById("overlay")


    create_post_button.addEventListener("click", function() {
  
        load_create_post_html(overlay, "create-post")  
    
    })

    bookmarks_button.addEventListener("click", function() {
        
        load_create_post_html(overlay, "bookmarks")  
    
    })

    settings_button.addEventListener("click", function() {
        
        load_create_post_html(overlay, "settings")  
    
    })

}