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

        

        if (view_name === 'local-data') {

            

            const local_data_textarea = document.getElementById("local-data-textarea")

            function adjust_text() {
                local_data_textarea.style.height = 'auto'
                local_data_textarea.style.height = local_data_textarea.scrollHeight + 'px';
            }

            local_data_textarea.addEventListener("input", function() {

                adjust_text()
            })



           
            local_data_textarea.textContent = `
subscriptions:

ksksksksak,
sdsaasasasasass,
asasdsd,
dsdsdsd
lslslslsls,
ksksksksak,
sdsaasasasasass,
asasdsd,
dsdsdsd
lslslslsls,
            
hidden:

ksksksksak,
sdsaasasasasass,
asasdsd,
dsdsdsd
lslslslsls,
ksksksksak,
sdsaasasasasass,
asasdsd,
dsdsdsd
lslslslsls,`
        
      adjust_text()
      }
      
        
    } catch (error) {

        console.error(error);
    }

}



export function user_sidebar_event() {

    const create_post_button = document.getElementById("create-post-button")
    const settings_button = document.getElementById("settings-button")
    const bookmarks_button = document.getElementById("bookmarks-button")
    const local_data_button = document.getElementById("local-data-button") 
    const overlay = document.getElementById("overlay")

    local_data_button.addEventListener("click", function() {
  
        load_create_post_html(overlay, "local-data")  
    
    })


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