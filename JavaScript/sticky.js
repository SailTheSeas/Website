



window.addEventListener("scroll", function () {
    
    let header = document.querySelector(".menu");
    //console.log(offSet);
    /*console.log('Y:' + scrollY);
    console.log('Top:' + document.documentElement.scrollTop)*/
    if (window.pageYOffset > header.offsetTop) {
        
        //header.classList.add("sticky");
        header.id = 'sticky';
    } else {
        
        header.removeAttribute('id');
    }
})