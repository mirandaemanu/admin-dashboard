const darkModeBtn = document.querySelector('.dark-mode');
let darkModeOn = false;

darkModeBtn.addEventListener('click', () => {
    let rootSelector = document.querySelector(':root');
    if(darkModeOn) {
        rootSelector.style.setProperty('--main-bg-color', 'white');
        rootSelector.style.setProperty('--font-color', 'black');
        rootSelector.style.setProperty('--main-container-bg', '#E2E8F0');
        rootSelector.style.setProperty('--menu-bp', "#1992D4");
        rootSelector.style.setProperty('--card-sideborder-color', "#F0B429")
        darkModeOn = false;
        return;
    }

    rootSelector.style.setProperty('--main-bg-color', '#333');
    rootSelector.style.setProperty('--font-color', 'white');
    rootSelector.style.setProperty('--main-container-bg', '#222')
    rootSelector.style.setProperty('--menu-bp', "#BB86FC");
    rootSelector.style.setProperty('--card-sideborder-color', "#BB86FC")
    darkModeOn = true;
})