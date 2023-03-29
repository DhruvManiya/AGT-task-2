const C1 = document.getElementById("container1");
const C2 = document.getElementById("container2");
const C3 = document.getElementById("container3");
const C4 = document.getElementById("container4");
const C5 = document.getElementById("container5");
const C6 = document.getElementById("container6");
const C7 = document.getElementById("container7");

function gsap_enter_function_1() {
  gsap.to("#created", {
    strokeDasharray: "0 1000",
    ease: "ease-in-out",
    duration: 0.5,
  });
  gsap.to("#gsap-c2", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c3", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c4", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c5", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c6", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c7", {
    fill: "none",
    duration: 0.5,
  });

  gsap.from("#gsap-c1sh1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c1sp1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c1sh2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c1sp2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c1si1", {
    y: 75,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-clri1", {
    y: 250,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-clri2", {
    y: -250,
    opacity: 0,
    duration: 1,
  });
  C1.classList.remove("hidden");
  C2.classList.add("hidden");
  C3.classList.add("hidden");
  C4.classList.add("hidden");
  C5.classList.add("hidden");
  C6.classList.add("hidden");
  C7.classList.add("hidden");
}

function gsap_enter_function_2() {
  gsap.to("#created", {
    strokeDasharray: "34% 1000",
    ease: "ease-in-out",
    duration: 0.5,
  });
  gsap.to("#gsap-c1", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c2", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c3", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c4", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c5", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c6", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c7", {
    fill: "none",
    duration: 0.5,
  });
  gsap.from("#gsap-c2sh1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c2sp1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c2sh2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c2sp2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c2si1", {
    y: 75,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c2ri1", {
    y: -250,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c2ri2", {
    y: 250,
    opacity: 0,
    duration: 1,
  });
  C1.classList.add("hidden");
  C2.classList.remove("hidden");
  C3.classList.add("hidden");
  C4.classList.add("hidden");
  C5.classList.add("hidden");
  C6.classList.add("hidden");
  C7.classList.add("hidden");
}
function gsap_enter_function_3() {
  gsap.to("#created", {
    strokeDasharray: "69% 1000",
    ease: "ease-in-out",
    duration: 0.5,
  });
  gsap.to("#gsap-c1", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c2", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c3", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c4", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c5", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c6", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c7", {
    fill: "none",
    duration: 0.5,
  });
  gsap.from("#gsap-c3sh1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c3sp1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c3sh2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c3sp2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c3si1", {
    y: 75,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c3ri1", {
    y: -550,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c3ri2", {
    y: 250,
    opacity: 0,
    duration: 1,
  });
  C1.classList.add("hidden");
  C2.classList.add("hidden");
  C3.classList.remove("hidden");
  C4.classList.add("hidden");
  C5.classList.add("hidden");
  C6.classList.add("hidden");
  C7.classList.add("hidden");
}
function gsap_enter_function_4() {
  gsap.to("#created", {
    strokeDasharray: "101% 1000",
    ease: "ease-in-out",
    duration: 0.5,
  });
  gsap.to("#gsap-c1", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c2", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c3", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c4", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c5", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c6", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c7", {
    fill: "none",
    duration: 0.5,
  });
  C1.classList.add("hidden");
  C2.classList.add("hidden");
  C3.classList.add("hidden");
  C4.classList.remove("hidden");
  C5.classList.add("hidden");
  C6.classList.add("hidden");
  C7.classList.add("hidden");

  gsap.from("#gsap-c4sh1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c4sp1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c4sh2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c4sp2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c4ri1", {
    y: 250,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c4ri2", {
    y: -1200,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c4ri3", {
    y: -2000,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c4ri4", {
    y: -750,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c4ri5", {
    y: -2500,
    opacity: 0,
    duration: 1,
  });
}
function gsap_enter_function_5() {
  gsap.to("#created", {
    strokeDasharray: "130% 1000",
    ease: "ease-in-out",
    duration: 0.5,
  });
  gsap.to("#gsap-c1", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c2", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c3", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c4", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c5", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c6", {
    fill: "none",
    duration: 0.5,
  });
  gsap.to("#gsap-c7", {
    fill: "none",
    duration: 0.5,
  });
  C1.classList.add("hidden");
  C2.classList.add("hidden");
  C3.classList.add("hidden");
  C4.classList.add("hidden");
  C5.classList.remove("hidden");
  C6.classList.add("hidden");
  C7.classList.add("hidden");

  gsap.from("#gsap-c5sh1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c5sp1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c5sh2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c5sp2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c5ri1", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c5ri2", {
    y: 500,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c5ri3", {
    y: -300,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c5ri4", {
    y: 500,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c5ri5", {
    y: -300,
    opacity: 0,
    duration: 1,
  });
}
function gsap_enter_function_6() {
  gsap.to("#created", {
    strokeDasharray: "162% 1000",
    ease: "ease-in-out",
    duration: 0.5,
  });
  gsap.to("#gsap-c1", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c2", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c3", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c4", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c5", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c6", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c7", {
    fill: "none",
    duration: 0.5,
  });
  C1.classList.add("hidden");
  C2.classList.add("hidden");
  C3.classList.add("hidden");
  C4.classList.add("hidden");
  C5.classList.add("hidden");
  C6.classList.remove("hidden");
  C7.classList.add("hidden");

  gsap.from("#gsap-c6sh1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c6sp1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c6sh2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c6sp2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c6ri1", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
}

function gsap_enter_function_7() {
  gsap.to("#created", {
    strokeDasharray: "195% 1000",
    ease: "ease-in-out",
    duration: 0.5,
  });
  gsap.to("#gsap-c1", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c2", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c3", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c4", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c5", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c6", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.to("#gsap-c7", {
    fill: "#0092ff",
    duration: 0.5,
  });
  gsap.from("#gsap-c7sh1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c7sp1", {
    y: 25,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c7sh2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c7sp2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c7si1", {
    y: 75,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from("#gsap-c7ri1", {
    y: 250,
    opacity: 0,
    duration: 1,
  });
  gsap.from("#gsap-c7ri2", {
    y: 250,
    opacity: 0,
    duration: 1,
  });
  C1.classList.add("hidden");
  C2.classList.add("hidden");
  C3.classList.add("hidden");
  C4.classList.add("hidden");
  C5.classList.add("hidden");
  C6.classList.add("hidden");
  C7.classList.remove("hidden");
}

var tl0 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "center 105%",
    end: "center 75%",
    onLeave: () => gsap_enter_function_2(),
    onEnterBack: () => gsap_enter_function_1(),
  },
});
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "center 105%",
    end: "center 65.2%",
    onLeave: () => gsap_enter_function_3(),
    onEnterBack: () => gsap_enter_function_2(),
  },
});
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "center 105%",
    end: "center 55.2%",
    onLeave: () => gsap_enter_function_4(),
    onEnterBack: () => gsap_enter_function_3(),
  },
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "center 105%",
    end: "center 45.2%",
    onLeave: () => gsap_enter_function_5(),
    onEnterBack: () => gsap_enter_function_4(),
  },
});
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "center 105%",
    end: "center 35.2%",
    onLeave: () => gsap_enter_function_6(),
    onEnterBack: () => gsap_enter_function_5(),
  },
});
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "center 105%",
    end: "center 25.2%",
    onLeave: () => gsap_enter_function_7(),
    onEnterBack: () => gsap_enter_function_6(),
  },
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
