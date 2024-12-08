//Loading Images Test

const root = "/Website/Portfolio"

let slideIndex = 1;


export function initialise(folder, numOfLPics, numOfPPics) {
    const images = [
        document.createElement('img'),
    ]
    let count = 0;
    let total = numOfLPics + numOfPPics;
    const div = document.createElement('div');
    div.id = 'gallery';
    div.classList.add('gallery');
    let span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times';
    div.appendChild(span);
    const landscapeDiv = document.createElement('div');
    for (let i = 1; i <= numOfLPics; i++) {
        count++;
        const subDiv = document.createElement('div');
        subDiv.classList.add('slides');
        const label = document.createElement('div');
        label.innerHTML = `${count} / ${total}`;      
        label.classList.add('numberIndex');
        subDiv.appendChild(label);
        const img = document.createElement('img');       
        img.src = (`Landscape/${folder} (${i}).jpg`);
        images[count - 1].src = (`Landscape/${folder} (${i}).jpg`);
        images.push(document.createElement('img'),)
        subDiv.appendChild(img);
        img.classList.add('slidesDisplayLandscape');
       
        images[count - 1].classList.add('display');
        images[count - 1].classList.add('landscape');     
        div.appendChild(subDiv);
        landscapeDiv.appendChild(images[count - 1]);
    }
    document.body.appendChild(landscapeDiv);
    const portraitDiv = document.createElement('div');
    for (let i = 1; i <= numOfPPics; i++) {
        count++;
        const subDiv = document.createElement('div');
        subDiv.classList.add('slides');
        const label = document.createElement('div');
        label.innerHTML = `${count} / ${total}`;
        label.classList.add('numberIndex');
        subDiv.appendChild(label);
        const img = document.createElement('img');       
        img.src = (`Portrait/${folder} (${i}).jpg`);
        images[count - 1].src = (`Portrait/${folder} (${i}).jpg`);
        images.push(document.createElement('img'),);
        subDiv.appendChild(img);
        img.classList.add('slidesDisplayPortrait');               
        images[count - 1].classList.add('display');
        images[count - 1].classList.add('portrait');
        div.appendChild(subDiv);
        portraitDiv.appendChild(images[count - 1]);
    }
    document.body.appendChild(portraitDiv);
    let a1 = document.createElement('a');
    a1.classList.add('prev');
    a1.innerHTML = '&#10094';
    
    let a2 = document.createElement('a');
    a2.classList.add('next');
    a2.innerHTML = '&#10095';

    div.appendChild(a1);
    div.appendChild(a2);
    
    document.body.appendChild(div);
    div.style.display = 'none';
    a1.addEventListener("click", function () { plusSlides(-1); });
    a2.addEventListener("click", function () { plusSlides(1); });
    span.addEventListener("click", function () { closeGallery(); });
    for (let i = 0; i < count; i++) {
        images[i].id = i;
        images[i].addEventListener("click", function () {
            openGallery();
            let item = this.id;
            item++;
            currentSlide(item);
        });
         
            /*openGallery ();*//*, currentSlide(i+1);*/
    }
    showSlides(slideIndex);


}

function printNum(num) {
    console.log(num);
}

function openGallery() {
    document.getElementById('gallery').style.display = "block";

    let header = document.getElementById('sticky');
    if (header != null && header != undefined)
        header.removeAttribute('id');
}

function closeGallery() {
    document.getElementById('gallery').style.display = "none";
}



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    

}
