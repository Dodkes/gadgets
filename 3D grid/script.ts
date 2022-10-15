let time: number = 1000
let differenceTime: number = 50
let iteration: number = 26

$(function() {
    setTimeout(() => { showTiles('.unit-1') }, 1000);
    for (let x = 1; x < iteration; x++) {
        setTimeout(() => { showTiles(`.unit-${x}`) }, delay());
    }
    setTimeout(() => {
        show3dHeading()
    }, 2500);
});

function showTiles (id: string) {
    $(id).css('visibility', 'visible')
}

function delay () {
    return time = time + differenceTime
}

function show3dHeading () {
    $(".heading-container").animate({
        width: '90%',
        opacity: '1'
    }, 2000)
}