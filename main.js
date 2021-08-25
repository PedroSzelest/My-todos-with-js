const app = ()=> {
    //Calling the elements
    const $name = document.getElementById("name")
    const $email = document.getElementById("email")
    const $facebook = document.getElementById("facebook")
    const $instagram = document.getElementById("instagram")
    const $github = document.getElementById("github")
    const $youtube = document.getElementById("youtube")
    const $linkedin = document.getElementById("linkedin")
    const $submit = document.querySelector("input[type=submit]")
    const $form = document.querySelector(".input > form")
    const $notes = document.querySelector(".notes")

    //Array to the information
    const users = []

    //Creating a note
    $submit.addEventListener("click", (submit)=> {
        submit.preventDefault()
        $notes.innerHTML = ""

        users.push({
            name: $name.value,
            email: $email.value,
            facebook: $facebook.value,
            instagram: $instagram.value,
            github: $github.value,
            linkedin: $linkedin.value,
            youtube: $youtube.value
        })
        

        createElements()

        $form.reset()
    })

    const createElements = ()=> {
        users.forEach((e, index)=> {
            const $div_note = document.createElement("div")
            $div_note.classList.add(`note${index}`)
            $div_note.classList.add("note")
            //--Personal
            const $div_personal = document.createElement("div")
            $div_personal.classList.add("result-personal-note")
            const $result_name = document.createElement("p")
            $result_name.classList.add("result-name")
            $result_name.textContent = e.name
            const $result_email = document.createElement("p")
            $result_email.classList.add("result-email")
            $result_email.textContent = e.email
            $div_personal.appendChild($result_name)
            $div_personal.appendChild($result_email)

            $div_note.appendChild($div_personal)
            
            //--Social
            const $div_social = document.createElement("div")
            $div_social.classList.add("result-social-note")

            //facebook
            if(e.facebook !== "") {
                const $facebook_div = document.createElement("div")
                const $facebook_a = document.createElement("a")
                $facebook_a.classList.add("result-facebook")
                const $facebook_i = document.createElement("i")
                $facebook_i.classList.add("bx")
                $facebook_i.classList.add("bxl-facebook-circle")
                $facebook_a.textContent = e.facebook
                $facebook_div.appendChild($facebook_i)
                $facebook_div.appendChild($facebook_a)
                $div_social.appendChild($facebook_div)
            }
            
            //instagram
            if(e.instagram !== "") {
                const $instagram_div = document.createElement("div")
                const $instagram_a = document.createElement("a")
                $instagram.classList.add("result-instagram")
                const $instagram_i = document.createElement("i")
                $instagram_i.classList.add("bx")
                $instagram_i.classList.add("bxl-instagram-alt")
                $instagram_a.textContent = e.instagram
                $instagram_div.appendChild($instagram_i)
                $instagram_div.appendChild($instagram_a)
                $div_social.appendChild($instagram_div)
            }

            //github
            if(e.github !== "") {
                const $github_div = document.createElement("div")
                const $github_a = document.createElement("a")
                $github_a.classList.add("result-github")
                const $github_i = document.createElement("i")
                $github_i.classList.add("bx")
                $github_i.classList.add("bxl-github")
                $github_a.textContent = e.github
                $github_div.appendChild($github_i)
                $github_div.appendChild($github_a)
                $div_social.appendChild($github_div)
            }

            //linkedin
            if(e.linkedin !== "") {
                const $linkedin_div = document.createElement("div")
                const $linkedin_a = document.createElement("a")
                $linkedin_a.classList.add("result-linkedin")
                const $linkedin_i = document.createElement("i")
                $linkedin_i.classList.add("bx")
                $linkedin_i.classList.add("bxl-linkedin")
                $linkedin_a.textContent = e.linkedin
                $linkedin_div.appendChild($linkedin_i)
                $linkedin_div.appendChild($linkedin_a)
                $div_social.appendChild($linkedin_div)
            }
            
            //youtube
            if(e.youtube !== "") {
                const $youtube_div = document.createElement("div")
                const $youtube_a = document.createElement("a")
                $youtube_a.classList.add("result-youtube")
                const $youtube_i = document.createElement("i")
                $youtube_i.classList.add("bx")
                $youtube_i.classList.add("bxl-youtube")
                $youtube_a.textContent = e.youtube
                $youtube_div.appendChild($youtube_i)
                $youtube_div.appendChild($youtube_a)
                $div_social.appendChild($youtube_div)
            }

            $div_note.appendChild($div_social)

            //--Buttons
            const $buttons_div = document.createElement("div")
            $buttons_div.classList.add("buttons")
            const $delete_button = document.createElement("button")
            $delete_button.classList.add("button")
            $delete_button.classList.add("delete")
            $delete_button.textContent = "delete"
            const $update_button = document.createElement("button")
            $update_button.classList.add("button")
            $update_button.classList.add("update")
            $update_button.textContent = "update"
            $buttons_div.appendChild($delete_button)
            $buttons_div.appendChild($update_button)

            $div_note.appendChild($buttons_div)
            
            //Add all into our section
            $notes.appendChild($div_note)
             
            //Delete button
            $delete_button.addEventListener("click", ()=> {
                deleteButton(index)
            })

            //Update button 
            $update_button.addEventListener("click", ()=> {
                updateButton(index)
            })
        })

        //Delete button
        const deleteButton = (index)=> {
            users.splice(index, 1)
            console.log(users, index)
            $notes.innerHTML = ""
            createElements()
        }

        //Update button
        const updateButton = (index)=> {
            $name.value = users[index].name
            $email.value = users[index].email
            $facebook.value = users[index].facebook
            $instagram.value = users[index].instagram
            $github.value = users[index].github
            $youtube.value = users[index].youtube
            $linkedin.value = users[index].linkedin
            users.splice(index, 1)
            console.log(users, index)
            $notes.innerHTML = ""
            createElements()
        }
    }

}

app()