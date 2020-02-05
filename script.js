const anders = new TimelineMax({});
const blokje = new TimelineMax({});

const vierkant = document.querySelector('#_vierkant_');

const hart = document.querySelector('.cls-6');

const a = document.querySelector('#_aAnders_');
const n = document.querySelector('#n');
const d = document.querySelector('#d');
const e = document.querySelector('#e');
const r = document.querySelector('#r');
const s = document.querySelector('#s');

TweenMax.to(hart, 0.7, {scaleX: 1.8, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: 1.5})
TweenMax.to(hart, 0.7, {rotate: 180, transformOrigin: "center"})
TweenMax.to(hart, 1.5, {rotate: -540, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: 1.5})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleX: -1.8})
TweenMax.to(hart, 0.7, {rotate: 360, transformOrigin: "center"})

TweenMax.to(hart, 0.7, {scaleY: 1.5});


anders
      .to(a, 0.25, {y: 300})
      .to(a, 0.25, {y: -19})
      .to(n, 0.25, {y: -300})
      .to(n, 0.25, {y: -19})
      .to(d, 0.25, {y: 300})
      .to(d, 0.25, {y: -19})
      .to(e, 0.25, {y: -300})
      .to(e, 0.25, {y: -19})
      .to(r, 0.25, {y: 300})
      .to(r, 0.25, {y: -19})
      .to(s, 0.25, {y: -300})
      .to(s, 0.25, {y: -19});

      blokje
            .to(vierkant, 3, {x: 0})
            .to(vierkant, 3, {x: -489})
            .to(vierkant, .5, {rotate: 180})
            .to(vierkant, .5, {y: -489})
            .to(vierkant, .5, {rotate: -180});
