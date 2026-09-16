const buttons = [
    document.getElementById("home"),
    document.getElementById("journal"),
    document.getElementById("about"),
    document.getElementById("photos")
];

function buttonEnter(){
    this.setAttribute("src", (`assets/${this.id}select.gif`))
}
function buttonLeave(){
    this.setAttribute("src", `assets/${this.id}.gif`)
}

buttons.forEach(button => {
    button.addEventListener("mouseenter", buttonEnter);
    button.addEventListener("mouseleave", buttonLeave);
})