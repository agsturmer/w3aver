



export function user_sidebar_event(overlay, view_name) {



    async function load_create_post_html() {


        if (!overlay.innerHTML.trim())  {

            const html = await fetch(`views/${view_name}.html`)

            const html_text = await html.text()

            const parser = new DOMParser();

            const doc = parser.parseFromString(html_text, 'text/html')

            overlay.innerHTML = doc.body.innerHTML;

        }

        overlay.style.display = "flex"

        document.body.style.overflowY = "hidden";

    
        const go_back_button = document.getElementById("go-back-button")

        go_back_button.addEventListener("click", function() {

            overlay.style.display = "none"
            document.body.style.overflowY = "auto";
            
        })
    }

    load_create_post_html(overlay)

}
