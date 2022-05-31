let toggles = document.getElementsByClassName("toggle")
let contents = document.getElementsByClassName("content")
let icons = document.getElementsByClassName("icon")

for (let i=0; i < toggles.length; i++){
    toggles[i].addEventListener("click", ()=>{
        if( parseInt(contents[i].style.height) != contents[i].scrollHeight){
            contents[i].style.height = contents[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove("fa-plus")
            icons[i].classList.add("fa-minus")
        }
        else{
            contents[i].style.height = "0px"
            toggles[i].style.color = "#111130"
            icons[i].classList.remove("fa-minus")
            icons[i].classList.add("fa-plus")
        }
        //If we want to close the opened one while we opening new one, we should write this code too.
        for( let j=0; j < contents.length; j++){
            if(j!==i){
                contents[j].style.height = "0px"
                toggles[j].style.color = "#111130"
                icons[j].classList.remove("fa-minus")
                icons[j].classList.add("fa-plus")
            }
        }
    })
}