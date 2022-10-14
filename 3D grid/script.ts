let time: number = 1000
let differenceTime: number = 50
let iteration: number = 26

$(function() {
    setTimeout(() => { showTiles('.unit-1') }, 1000);
    for (let x = 1; x < iteration; x++) {
        setTimeout(() => { showTiles(`.unit-${x}`) }, delay());
    }
});

console.log(document.querySelector(`.unit-${iteration}`))

function showTiles (id: string) {
    $(id).css('visibility', 'visible')
}

function delay () {
    return time = time + differenceTime
}