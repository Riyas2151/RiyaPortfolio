const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });

  tl.to(".boundingelem", {
    y: 0,
    // opacity:0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });

  tl.from("#herofooter", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });

}


// function circleChapta(){

//     var xscale= 1;
//     var yscale = 1;

//     var xprev= 0;
//     var yprev= 0;
//     window.addEventListener('mousemove',function(dets){
//         var xdiff = dets.clientX - xprev;
//         var ydiff = dets.clientY - yprev;
        
//         xscale = gsap.utils.clamp(.8,1.2,xdiff);
//         yscale = gsap.utils.clamp(.8,1.2,ydiff);


//         xprev = dets.clientX;  
//         yprev = dets.clientY; 
//         // circleMouseFollower(xscale,yscale);
//         circleMouseFollower();


//             })
// }

firstPageAnim();
function circleMouseFollower() {
  window.addEventListener("mousemove", function (event) {
    const minicircle = document.querySelector("#minicircle");
    minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
}

circleMouseFollower();

document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diff2 = 0;

  elem.addEventListener('mousemove', function (details) {
    const diff = details.clientY - elem.getBoundingClientRect().top;

    const image = elem.querySelector("img");

    rotate = gsap.utils.clamp(-14, 14, rotate + (details.clientX - diff2));
    diff2 = details.clientX;

    gsap.to(image, {
      opacity: 1,
      ease: "power2",
      top: diff,
      left: details.clientX,
      rotation: rotate,
    });
  });

  elem.addEventListener('mouseleave', function () {
    const image = elem.querySelector("img");
    gsap.to(image, {
      opacity: 0,
    });
  });
});

