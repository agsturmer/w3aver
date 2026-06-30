function icons_event() {

    const bookmark_button = document.querySelectorAll(".post__bookmark-button")
    const article_subscribe_button = document.querySelectorAll(".post__subscribe")

    bookmark_button.forEach(bt => {

        bt.addEventListener("click", function() {
            this.classList.toggle("active")
        })
    })

    article_subscribe_button.forEach(bt => {

        bt.addEventListener("click", function() {

            this.classList.toggle("active")

            if (this.classList.contains("active")) {
                this.innerHTML = `<svg class="post__subscribe-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`

            } else 
                this.innerHTML = "subscribe" 

        })
    })
}







export async function load_posts_json() {

    try {
        const response = await fetch('../api/posts.json')
        const response_json = await response.json()
   

        response_json.forEach((post) => {

            let description_item = ""


            const article = document.createElement('article')

            if (post.img) {

                description_item = `<img src="${post.img}" class="post__img">`
            
            } else if (post.text) {

                description_item =  `<p class="post__description">${post.text}</p>`
            }

            article.className = "post"

            article.innerHTML = `

            <div class="post__profile">

                <div class="post__profile-left">
                    <img src="${post.favicon}" class="post__favicon">
                    <a hx-get="nav-sidebar/users.html" hx-target="#feed" class="post__profile-name">${post.autor}</a>
                </div>

                <button class="post__subscribe">subscribe</button>

            </div>

                <h2 class="post__title">${post.title}</h2>
                ${description_item}

            <div class="post__bottom">
                <time class="post__data">${post.data}</time>
                <button class="post__bookmark-button">
                <svg class="post__bookmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
                </button>
            </div>`

            const feed = document.getElementById('feed')

            feed.appendChild(article)
        })
    }

    catch (error) {
        
       console.log(error)


    }

    icons_event()
}

