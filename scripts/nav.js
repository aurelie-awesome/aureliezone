//preload hover images (i think this makes a difference)
window.addEventListener('DOMContentLoaded', () => {
    const hoverGifs = [
        '../assets/nav/homeselect.gif',
        '../assets/nav/aboutselect.gif',
        '../assets/nav/zineselect.gif',
        '../assets/nav/photosselect.gif',
    ];
    hoverGifs.forEach(src =>{
        const img = new Image();
        img.src = src;
    });
});