$(document).ready(function(){

    // Init ScrollMagic and trigger the scroll bar from browser to ScrollMagic
    var controller = new ScrollMagic.Controller();

    // Scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project01'
    })
    .setClassToggle("#project01", 'fade-in')
    .addTo(controller);
});