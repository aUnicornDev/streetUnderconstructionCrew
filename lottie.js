const congratulateBtn = document.querySelector('.congratulate');
const svgContainer = document.querySelector('.lottie__player');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
});

congratulateBtn.addEventListener('click', () => {
    svgContainer.classList.remove('hide');
    animItem.goToAndPlay(0,true);
})

animItem.addEventListener('complete', () => {
    svgContainer.classList.add('hide');
    
})