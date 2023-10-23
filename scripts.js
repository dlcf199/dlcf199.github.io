function openLink(link){
    window.open(link, "_blank")
}

function scrollToContent(){
    let element = document.getElementById("content");
    element.scrollIntoView({behavior: 'smooth'});
}

function cScroll(element){
    end = element.scrollLeft + element.clientWidth >= element.scrollWidth - 50;
    if(end){
        element.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        buttonLabel = "keyboard_arrow_right";
        return;
    }
    element.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth"
    });
    setTimeout(() => {
        cScrollCheck(element);
    }, 300)
}

function cScrollCheck(element){
    let buttonLabel = element.parentElement.querySelector(".material-symbols-outlined");
    end = element.scrollLeft + element.clientWidth >= element.scrollWidth - 50;
    if(end){
        buttonLabel.innerHTML = "keyboard_arrow_left";
    }
    else{
        buttonLabel.innerHTML = "keyboard_arrow_right";
    }
}

document.querySelectorAll(".carrousel").forEach((element) => {
    element.addEventListener("scroll", () => cScrollCheck(element))
})