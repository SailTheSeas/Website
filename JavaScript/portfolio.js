//Loading Images Test

const root = "/Website/Portfolio"

let count = 0;

const portfolioItems =
    [
        { name: "Animals", href: `Animals/portfolio.html` },
        { name: "Architecture", href: `Architecture/portfolio.html` },
        { name: "Landscapes", href: `Landscapes/portfolio.html` },
        { name: "Moon", href: `Moon/portfolio.html` },
        { name: "Nature", href: `Nature/portfolio.html` },
        { name: "Portraits", href: `Portraits/portfolio.html` },
        { name: "Sun", href: `Sun/portfolio.html` },
/*        { name: "Short Films", href: `ShortFilms/portfolio.html` },*/
    ];
const portfolioPictures =
    [
        { name: "Animals", href: `Pictures/Animals.jpg` },
        { name: "Architecture", href: `Pictures/Architecture.jpg` },
        { name: "Landscapes", href: `Pictures/Landscapes.jpg` },
        { name: "Moon", href: `Pictures/Moon.jpg` },
        { name: "Nature", href: `Pictures/Nature.jpg` },
        { name: "Portraits", href: `Pictures/Portraits.jpg` },
        { name: "Sun", href: `Pictures/Sun.jpg` },
/*        { name: "Short Films", href: `Pictures/ShortFilms.gif` },*/
    ];



export function initialise(numOfPics, divId) {
 
    let portfolioHolder = document.getElementById(divId);

    const img = [
        document.createElement('img'),
    ]


    const div = [
        document.createElement('div')
    ]

    for (let i = 1; i <= numOfPics; i++) {

                
        let container = document.createElement('div')
        container.classList.add('container')
        container.name = portfolioPictures[i - 1].name;
        let cover = document.createElement('div')
        cover.classList.add('textHover');
        img[i - 1].src = (portfolioPictures[i - 1].href);
        
        img[i - 1].name = (portfolioPictures[i - 1].name);
        div[i - 1].textContent = portfolioPictures[i - 1].name;
        div[i - 1].id = portfolioPictures[i - 1].name; 
        
            /*img[i - 1].width = img[i - 1].naturalWidth / 8
            img[i - 1].height = img[i - 1].naturalHeight / 8
            */

            
        container.setAttribute("value", i - 1);
        img[i - 1].classList.add('link');
        div[i - 1].classList.add('portfolioLabel')
        
        container.appendChild(img[i - 1]);
        container.append(cover);
        container.appendChild(div[i - 1]);
        
       //img[i - 1].appendChild(div[i - 1]);
        
        portfolioHolder.appendChild(container);
        //document.body.appendChild(container);
        


        img.push(document.createElement('img'));
        div.push(document.createElement('div'));
        container.onclick = function () {
            window.location.href = portfolioItems[this.getAttribute("value")].href;
            

 
        };


        container.onmouseenter = function () {
            let text = document.getElementById(this.name);
            text.style.visibility = 'visible'
            let cover = this.lastChild.previousSibling;           
            cover.style.visibility = 'visible'
            //text.classList.add('textHover');
            this.classList.add('hover');
            
        };

        container.onmouseleave = function () {
            let text = document.getElementById(this.name);
            text.style.visibility = 'hidden';
            let cover = this.lastChild.previousSibling;
            cover.style.visibility = 'hidden'
            //text.classList.remove('textHover');
            this.classList.remove('hover');
        };

        



    }


    /*setInterval(updateImages(numOfPics), 5000);*/
}

/*function updateImages(numOfPics) {
    for (let i = 1; i <= numOfPics; i++) {
        console.log(portfolioPictures[i - 1].href + `.jpg`);
    }
}*/
