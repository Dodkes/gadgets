let time: number = 1000
let differenceTime: number = 50

$(function() {
    setTimeout(() => { showTiles('.unit-1') }, 1000);
    setTimeout(() => { showTiles('.unit-2') }, delay ());
    setTimeout(() => { showTiles('.unit-3') }, delay ());
    setTimeout(() => { showTiles('.unit-4') }, delay ());
    setTimeout(() => { showTiles('.unit-5') }, delay ());
    setTimeout(() => { showTiles('.unit-6') }, delay ());
    setTimeout(() => { showTiles('.unit-7') }, delay ());
    setTimeout(() => { showTiles('.unit-8') }, delay ());
    setTimeout(() => { showTiles('.unit-9') }, delay ());
    setTimeout(() => { showTiles('.unit-10') }, delay ());
    setTimeout(() => { showTiles('.unit-11') }, delay ());
    setTimeout(() => { showTiles('.unit-12') }, delay ());
    setTimeout(() => { showTiles('.unit-13') }, delay ());
    setTimeout(() => { showTiles('.unit-14') }, delay ());
    setTimeout(() => { showTiles('.unit-15') }, delay ());
    setTimeout(() => { showTiles('.unit-16') }, delay ());
    setTimeout(() => { showTiles('.unit-17') }, delay ());
    setTimeout(() => { showTiles('.unit-18') }, delay ());
    setTimeout(() => { showTiles('.unit-19') }, delay ());
    setTimeout(() => { showTiles('.unit-20') }, delay ());
    setTimeout(() => { showTiles('.unit-21') }, delay ());
    setTimeout(() => { showTiles('.unit-22') }, delay ());
    setTimeout(() => { showTiles('.unit-23') }, delay ());
    setTimeout(() => { showTiles('.unit-24') }, delay ());
    setTimeout(() => { showTiles('.unit-25') }, delay ());
});

function showTiles (id: string) {
    $(id).css('visibility', 'visible')
}

function delay () {
    return time = time + differenceTime
}