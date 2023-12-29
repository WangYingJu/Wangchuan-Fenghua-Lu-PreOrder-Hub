const liquifyTrigger = document.querySelector(".js-liquify-trigger");
// const textTriggers = [...document.querySelectorAll('p')];
const inkTriggers = [...document.querySelectorAll(".js-ink-trigger")];

const controller = new ScrollMagic.Controller();

const sceneAuthorLiquid = new ScrollMagic.Scene({
  triggerElement: liquifyTrigger,
  triggerHook: "onEnter",
})
  .setTween("#liquid", 2, {
    attr: {
      scale: "0",
    },
    ease: Power4.easeOut,
    delay: 1,
  })
  .reverse(false)
  .addTo(controller);

inkTriggers.map((ink) => {
  const sceneInk = new ScrollMagic.Scene({
    triggerElement: ink,
    triggerHook: "onEnter",
  })
    .setClassToggle(ink, "is-active")
    .reverse(false)
    .addTo(controller);
});
