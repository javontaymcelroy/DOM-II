const funSun = document.querySelector('.btn1');
funSun.addEventListener('click', (e) => {
    alert('Sorry, we are booked!.');
});

const funMountain = document.querySelector('.btn2');
funMountain.addEventListener("mousedown", (e) => {
    alert("Use Code: FUNBUS for 10% OFF");
});

const funIsland = document.querySelector('.btn3');
funIsland.addEventListener('dblclick', (e) => {
    alert("Please sign in!");
});

const funImages = document.querySelector('.rounded-images');
funImages.addEventListener('mouseover', (e) => {
    TweenMax.to('.rounded-images',1,{scale:0.8});
});

const introFunBus = document.querySelector('.intro');
introFunBus.addEventListener('mouseleave', (e) => {
    e.target.style.color = "red";
});

const contentSection = document.querySelector('.text-content');
contentSection.addEventListener('mouseenter', (e) => {
    e.target.style.color = "blue";
});

const contentDestination = document.querySelector('.content-destination');
contentDestination.addEventListener('mousemove', (e) => {
    e.target.style.color = 'green';
});

const navContainer = document.querySelector('.logo-heading');
navContainer.addEventListener('mouseout', (e) => {
    e.target.style.color = "purple";
});

const navBar = document.querySelector('.nav');
navBar.addEventListener('mouseup', (e) => {
   alert('AppleAirpods2020');
});

const footerBar = document.querySelector('.footer');
footerBar.addEventListener('select', (e) => {
    alert('Why are you selecting this?');
});

const destPic = document.querySelector('.destination-pic');
destPic.addEventListener('mouseover',(e) => [
    TweenMax.to('.destination-pic',1,{rotation: 360})
]);