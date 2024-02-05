function lockedProfile() {
    const btns = Array.from(document.querySelectorAll('button'));

    btns.forEach(x => x.addEventListener('click', onClickHandler));

    function onClickHandler(event) {
        const hiddenInfo = event.currentTarget.parentElement.querySelector('div');
        const currentRadioBtn = event.currentTarget.parentElement.querySelector('input[type="radio"]:checked');

        if (currentRadioBtn.value === 'unlock') {
            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                hiddenInfo.style.display = 'block';
            } else if (event.target.textContent === 'Hide it') {
                event.target.textContent = 'Show more';
                hiddenInfo.style.display = 'none';
            }
        } else {
            return;
        }
    }
}