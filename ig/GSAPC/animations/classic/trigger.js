gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function (){
    const footer = document.querySelector('.footer');
    const lastCard = document.querySelector('.card.scroll');
    const pinnedSections = gsap.utils.toArray('.pinned');

    pinnedSections.forEach( (section, index, sections) => {
        let img = section.querySelector('.img');

        let nextSection = sections[index + 1] || lastCard;

        let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
    });
})