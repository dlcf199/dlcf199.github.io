function openLink(link){
    window.open(link, "_blank")
}

function scrollToContent(){
    let element = document.getElementById("content");
    element.scrollIntoView({behavior: 'smooth'});
}