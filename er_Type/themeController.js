//-------------------------------------------
// 808 theme 
//
const eight08Theme = {
    bg: "#333A45",
    blinker: "#F44C7F",
    textGhost: "#ffffff66",
    textCorrect: "#e9ecf0",
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
}

//------------------------------------------




const themeToggle = document.querySelector('.theme-controller');
const wrapper = document.querySelector('#wrapper');
const title = document.querySelector('#title');
const active = document.querySelector('#text span.active');



themeToggle.addEventListener('click', () => {
    if(themeToggle.checked) {
        themeDark();
    } else {
        themeLight();
        
    }
})

function themeDark(){
    title.style.color = eight08Theme.blinker;
    wrapper.style.backgroundColor = eight08Theme.bg;
    wrapper.style.borderColor = paperTheme.blinker;
    text.style.color = eight08Theme.textGhost;
    active.style.setProperty('--activeClr', eight08Theme.blinker);
   
}
function themeLight() {
    title.style.color = paperTheme.blinker;
    wrapper.style.backgroundColor = paperTheme.bg;
    wrapper.style.borderColor = paperTheme.blinker;
    text.style.color = paperTheme.textGhost;
    active.style.setProperty('--activeClr', paperTheme.blinker);
}

themeDark();


// adding the correct class themes


    