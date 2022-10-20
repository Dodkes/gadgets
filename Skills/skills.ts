const skillsContainer = document.querySelector<HTMLDivElement>('.skills-container')
const skill = document.querySelector<HTMLDivElement>('.skill')

skillsContainer?.addEventListener('mouseenter', () => {
if (skill){
    skill.style.color = 'red'
    skill.style.animationPlayState = 'paused'
}})

skillsContainer?.addEventListener('mouseout', () => {
if (skill) {
    skill.style.color = 'white'
    skill.style.animationPlayState = 'running'
}})