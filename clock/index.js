let sunrise;
let sunset;
let array;


// function tiktok(){
//     console.log(event)
//     const lat = 24.934725;
//     const long = 90.751511;
//     const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}`

//     fetch(url).then(response => response.json())
//     .then(data => {
//         sunrise = data.results.sunrise;
//         sunset = data.results.sunset;

//         if(Number(sunrise[0] >= Number(hours)))
        
//     }).catch(error => console.error(error))
// }


function tiktok(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const clock = document.getElementById('clock');
    const time = `${hours}:${minutes}:${seconds} ${meridiem}`;
    clock.textContent = time;
}

tiktok();
setInterval(tiktok, 1000);

function animation(){
    const now = new Date();
    const hours = now.getHours();
    
    if(hours >= 6 && hours < 18){
        
    }
}

animation();