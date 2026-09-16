//preload hover images (i think this makes a difference)
window.addEventListener('DOMContentLoaded', () => {
    const hoverGifs = [
        '../assets/homeselect.gif',
        '../assets/aboutelect.gif',
        '../assets/zineselect.gif',
        '../assets/photosselect.gif',
    ];
    hoverGifs.forEach(src =>{
        const img = new Image();
        img.src = src;
    });
});