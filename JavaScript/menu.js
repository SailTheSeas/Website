//Pages Index Code
const root = "/Website"

const menuItems =
    [
        { name: "Home", href: `${root}/index.html` },
        //{ name: "Blog", href: `${root}/Blog/blog.html` },
        //{ name: "Essays", href: `${root}/Essays/essays.html` },
        { name: "Pictures", href: `${root}/Portfolio/portfolio.html` },
        { name: "Short Films", href: `${root}/ShortFilms/portfolio.html` },
        { name: "Games", href: `${root}/Portfolio/portfolio.html` },
        { name: "Design", href: `${root}/Designs/designs.html` },
        { name: "About", href: `${root}/About/about.html` },
    ]

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    
    const div = document.createElement("div");
    div.classList.add('menu');
    div.id = 'menu';
    for (let menuItem of menuItems) {
        
        
        if (currentPage != menuItem.name) {
            const a = document.createElement("a");
            a.classList.add('menu');
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            div.appendChild(a);
            
            
        } else 
        {
            const a = document.createElement("a");     
            a.classList.add('inactive');    
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            div.appendChild(a);
        }
        


    }
    
    nav.appendChild(div);
    nav.appendChild(document.createElement("hr"));
}
