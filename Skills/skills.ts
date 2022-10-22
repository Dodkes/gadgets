const myTechnologies: string [] = ['.typescript', '.html', '.css', '.scss', '.bootstrap', '.jquery', '.react', '.github', '.json', '.api', '.es5-es6']

function showTechnologies () {
    for (let element of myTechnologies) {
        $(element).animate({
            fontSize: '5vw'
        }, randomSpeed())
    }
}

function randomSpeed (): number {
    return Math.floor(Math.random() * 1000)
}

//Run script
showTechnologies ()
