//-------------------------------------------
// 808 theme 
//
const eight08Theme = {
    bg: "#333A45",
    blinker: "#F44C7F",
    textGhost: "#ffffff66",
    textCorrect: "#e9ecf0",
    statsText: "#939EAE",
    statsNum: "#F44C7F",
}
//-------------------------------------------
//-------------------------------------------
// paper theme
//
const paperTheme = {
    bg: "#EEEEEE",
    blinker: "#535353",
    textGhost: "#B2B2B2",
    textCorrect: "#444444",
    statsText: "#535353",
    statsNum: "#444444",
}

//------------------------------------------




const themeToggle = document.querySelector('.theme-controller');
const wrapper = document.querySelector('#wrapper');
const title = document.querySelector('#title');
const rootThemes = document.querySelector(':root');

function themeDetect(){
    if(themeToggle.checked) {
        themeDark();
    } else {
        themeLight();
    }
}
themeToggle.checked = true;
themeDetect();
themeToggle.addEventListener('click', themeDetect);

function themeDark(){
    title.style.color = eight08Theme.blinker;
    wrapper.style.backgroundColor = eight08Theme.bg;
    wrapper.style.borderColor = paperTheme.blinker;
    text.style.color = eight08Theme.textGhost;
    rootThemes.style.setProperty('--correctClr', eight08Theme.textCorrect);
    rootThemes.style.setProperty('--statsTextClr', eight08Theme.statsText);
    rootThemes.style.setProperty('--mainClr', eight08Theme.blinker);
    timeButtons.forEach(button => {
        button.style.color = eight08Theme.blinker;
    })
    
   
}
function themeLight() {
    title.style.color = paperTheme.blinker;
    wrapper.style.backgroundColor = paperTheme.bg;
    wrapper.style.borderColor = paperTheme.blinker;
    text.style.color = paperTheme.textGhost;
    rootThemes.style.setProperty('--correctClr', paperTheme.textCorrect);
    rootThemes.style.setProperty('--statsTextClr', paperTheme.statsText);
    rootThemes.style.setProperty('--mainClr', paperTheme.blinker);
    timeButtons.forEach(button => {
        button.style.color = paperTheme.blinker;
    })
}


    