// JavaScript source code

const portfolioPictures =
    [
        { name: "Animals", href: `Portfolio/Pictures/Animals.jpg` },
        { name: "Architecture", href: `Portfolio/Pictures/Architecture.jpg` },
        { name: "Landscapes", href: `Portfolio/Pictures/Landscapes.jpg` },
        { name: "Moon", href: `Portfolio/Pictures/Moon.jpg` },
        { name: "Nature", href: `Portfolio/Pictures/Nature.jpg` },
        { name: "Portraits", href: `Portfolio/Pictures/Portraits.jpg` },
        { name: "Sun", href: `Portfolio/Pictures/Sun.jpg` },
    ];

const displayPic = document.getElementById("display");

let picIndex = 0;

export function initialise() {
    displayPic.src = (portfolioPictures[picIndex].href);
    setInterval(function updateImages() {
        picIndex++;
        
        if (picIndex >= 7) {
            picIndex = 0;
        }
        displayPic.src = (portfolioPictures[picIndex].href);
        }, 2000);    
}



/*function updateImages() {   


}*/