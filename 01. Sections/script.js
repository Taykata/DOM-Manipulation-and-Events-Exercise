function create(words) {

    const content = document.getElementById('content');
    let counter = 1;
    
    for (let word of words) {
        const divElement = document.createElement('div');
        content.appendChild(divElement);
        const pElement = document.createElement('p');
        pElement.textContent = `Section ${counter}`;
        counter++;
        divElement.appendChild(pElement);
        pElement.style.display = 'none';
    }

    content.addEventListener('click', showText);

    function showText(event) {
        const section = event.target;
        const pElement = section.querySelector('p');
        pElement.style.display = 'block';
    }
}