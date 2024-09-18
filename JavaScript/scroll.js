

function ScrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

export function initialise() {


    document.body.appendChild(document.createElement('br'))
    const button = document.createElement('button')
    button.textContent = 'To Top'
    document.body.appendChild(button)

    button.addEventListener('click', ScrollUp);
}