const tempID = document.querySelector('#temp');
const conditionsID = document.querySelector('#conditions');
const windsID = document.querySelector('#winds');
const windChillID = document.querySelector('#wind-chill');

const temp = 10
const winds = 5

document.addEventListener('DOMContentLoaded', () => {
    tempID.textContent = `${temp} °C`;
    conditionsID.textContent = 'Partly Cloudy';
    windsID.textContent = `${winds} km/h`;
    windChillID.textContent = calculateWindChill(temp, winds);
});

function calculateWindChill(temp, winds) {
    if (temp > 10 || winds < 4.8) {
        return 'N/A';
    }
    const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(winds, 0.16) + 0.3965 * temp * Math.pow(winds, 0.16);
    return `${windChill.toFixed(2)} °C`;
}

