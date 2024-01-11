
const loco = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco();

// var hover = document.querySelector(".hover")
// var hoverbef = underlineHove.querySelector("::before")
// hover.addEventListener("mouseleave",()=>{
//     hoverbef.style.transformOrigin = "100%, 0";
//     hoverbef.style.transform = "scaleX(0) translateZ(0)";
// })




const spans = ()=>{
    
    var cltr = ""
    var cltr2 = ""
    var cltr3 = ""
    var cltr4 = ""
    var cltr5 = ""
    var cltr6 = ""
    var cltr7 = ""
    var cltr8 = ""
    var cltr9 = ""
    var cltr10 = ""
    var cltr11 = ""
    var cltr12 = ""
    var cltr13 = ""

    document.querySelector(".s1-h1>h1").textContent.split("").forEach((elem) => {
        cltr += `<span class="sp">${elem}</span>`
        document.querySelector(".s1-h1>h1").innerHTML = cltr
    })

    document.querySelector(".s2-contant>h1").textContent.split("").forEach((elem) => {
        cltr2 += `<div class="d1d"><span class="sp2">${elem}</span></div>`
        document.querySelector(".s2-contant>h1").innerHTML = cltr2
    })

    document.querySelector(".h31").textContent.split("").forEach((elem) => {
        cltr3 += `<div class="d1d2"><span class="sp2">${elem}</span></div>`
        document.querySelector(".h31").innerHTML = cltr3
    })

    document.querySelector(".h32").textContent.split("").forEach((elem) => {
        cltr4 += `<div class="d1d2"><span class="sp2">${elem}</span></div>`
        document.querySelector(".h32").innerHTML = cltr3
    })
    document.querySelector(".h33").textContent.split("").forEach((elem) => {
        cltr5 += `<div class="d1d2"><span class="sp2">${elem}</span></div>`
        document.querySelector(".h33").innerHTML = cltr3
    })
    document.querySelector(".nm1").textContent.split("").forEach((elem) => {
        cltr6 += `<div class="d1d3"><span class="sp3">${elem}</span></div>`
        document.querySelector(".nm1").innerHTML = cltr6
    })
    document.querySelector(".nm2").textContent.split("").forEach((elem) => {
        cltr7 += `<div class="d1d3"><span class="sp3">${elem}</span></div>`
        document.querySelector(".nm2").innerHTML = cltr7
    })

    document.querySelector(".h2-frist").textContent.split("").forEach((elem) => {
        cltr8 += `<div class="d1d2"><span class="sp4">${elem}</span></div>`
        document.querySelector(".h2-frist").innerHTML = cltr8
    })
    document.querySelector(".h2-secound").textContent.split("").forEach((elem) => {
        cltr9 += `<div class="d1d2"><span class="sp4">${elem}</span></div>`
        document.querySelector(".h2-secound").innerHTML = cltr9
    })

    document.querySelector(".s5-botm>h2").textContent.split("").forEach((elem) => {
        cltr10 += `<div class="d1d"><span class="sp5">${elem}</span></div>`
        document.querySelector(".s5-botm>h2").innerHTML = cltr10
    })

    document.querySelector("#s7>.s5-top>.h2-frist").textContent.split("").forEach((elem) => {
        cltr11 += `<div class="d1d2"><span class="sp5">${elem}</span></div>`
        document.querySelector("#s7>.s5-top>.h2-frist").innerHTML = cltr11
    })
    document.querySelector("#s7>.s5-top>.h2-secound").textContent.split("").forEach((elem) => {
        cltr12 += `<div class="d1d2"><span class="sp5">${elem}</span></div>`
        document.querySelector("#s7>.s5-top>.h2-secound").innerHTML = cltr12
    })

    document.querySelector("#s7>.s5-botm>h2").textContent.split("").forEach((elem) => {
        cltr13 += `<div class="d1d"><span class="sp6">${elem}</span></div>`
        document.querySelector("#s7>.s5-botm>h2").innerHTML = cltr13
    })

}
spans();


const fristPage  = (dets)=>{

    gsap.from("span.sp", {
        y: 500,
        opacity: 0,
        stagger: .1,
        duration: .7,
        ease: Power4
    })

    var cursur  = document.querySelector("#cursur")
    var s1  = document.querySelector("#s1")
    s1.addEventListener("mousemove",(dets)=>{
        gsap.to(cursur,{
            x: dets.clientX,
            y: dets.clientY,
            opacity: 1,
            ease: Power4
        })
    })
    s1.addEventListener("mouseleave",(dets)=>{
        gsap.to(cursur,{
            x: "-150%",
            ease: Power4
        })
    })

    var nav = gsap.timeline({
        scrollTrigger: {
            trigger: "#s2",
            scroller: "#main",
            start: "top top",
            end: "top 1%",
            scrub: 4,
            // markers: true
        }
    })

    nav.to("nav h2", {
        color: "black",
        ease: Power4,
        duration: 5,
    },"nav")
    
    nav.to("nav", {
        padding: "1.3vw 3.2vw",
        ease: Power4,
        duration: .4,
    },"nav")
    

}
fristPage();

const page2 = ()=>{   
var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#s2",
        scroller: "#main",
        start: "top 70%",
        end: "top 75%",
        scrub: 6,
        // markers: true,
    }
})

tl1.to(".hr1",{
    width: "100%",
    duration: 5,
    ease: Expo
},"ok")

tl1.from(".d1d>.sp2", {
    y: 400,
    // stagger: 0.2,
    duration: 3 ,
    ease: Power3,

},"ok")
}
page2();


const page3 = ()=>{
    gsap.from(".sp3",{
        y:400,
        duration: 1,
        opacity: 0,
        ease: Power4,
        scrollTrigger:{
            trigger:"#s3",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            scrub: 3,
            // markers: true
        }
    })
}
page3();


const page4 = ()=>{
    var vdo = [
        "video/vdo-1.mp4",
        "video/vdo-2.mp4",
        "video/vdo-3.mp4",
    ]
    
    var card = document.querySelectorAll(".card")
    card.forEach((elem,index)=>{
        var video = document.createElement("video")
        elem.addEventListener("mouseenter",()=>{
            video.src = `${vdo[index]}`
            video.play()
            video.loop = true
            elem.appendChild(video)
        })
        elem.addEventListener("mouseleave",()=>{
            video.remove()
            // video.pause()
        })
    })
}
page4();

const page5 = ()=>{
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#s5",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            scrub: 5,
            // markers: true,
        }
    })

    tl2.from(".d1d2>.sp4",{
        y: 400,
        duration: 8
    },"s5")

    tl2.to(".hr2",{
        width: "100%",
        duration: 10
    },"s5")

    tl2.from(".d1d>.sp5",{
        y: 400,
        duration: 8
    },"s5")
}
page5();

const page6 = ()=>{
    var s6 = document.querySelector("#s6")
    var cursu2 = document.querySelector("#cursu2")
    s6.addEventListener("mousemove",(dets)=>{
        gsap.to(cursu2,{
            rotate: "0deg",
            scale: 1,
            opacity:1,
            x: dets.clientX,
            y: dets.clientY,
            ease: Power4
        })
    })
    s6.addEventListener("mouseleave",(dets)=>{
        gsap.to(cursu2,{
            rotate: "-180deg",
            scale: 0,
            opacity: 0,
            x: dets.clientX,
            y: dets.clientY,
        })
    })

    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: "#s6",
            scroller: "#main",
            start: "top 60%",
            end: "top 75%",
            scrub: 8,
            // markers: true
        }
    })

    tl3.to(".svg2",{
        rotate: "230deg",
        ease: Power3,
        duration: 12
    },"s6")
    tl3.to(".count>span",{
        y: "-400%",
        ease: Power3,
        duration: 12
    },"s6")
}
page6();

const page7 = ()=>{
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: "#s7",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            scrub: 5,
            // markers: true,
        }
    })

    tl4.from(".d1d2>.sp5",{
        y: 400,
        duration: 8,
    },"s7")

    tl4.to(".hr3",{
        width: "95%",
        duration: 10,
    },"s7")

    tl4.from(".d1d>.sp6",{
        y: 400,
        duration: 8,
    },"s7")
}
page7();

const page8 = ()=>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4.5,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: true,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
page8();

const page9 = ()=>{
    gsap.from(".s9-botm>h2",{
        y:"400%",
        duration:.4,
        scrollTrigger:{
            trigger: "#s9",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            scrub: 2,
            // markers: true,
        }
    })
}
page9();

const page10 = ()=>{
    var tl6 = gsap.timeline({
        scrollTrigger:{
            trigger: "#s10",
            scroller: "#main",
            start: "top 80%",
            end: "top 85%",
            scrub: 8,
            // markers: true,
        }
    })
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger: "#s11",
            scroller: "#main",
            start: "top 110%",
            end: "top 115%",
            scrub: 8,
            // markers: true,
        }
    })

    tl6.from(".opc",{
        opacity:"-2",
        ease: Power4,
        duration: 6
    })

    tl5.from(".svga",{
        y:-400,
        ease: Power4,
        stagger: .5,
        duration: 4,
    })
}
page10();

var hover = document.querySelectorAll(".hover")
var underlineHover = document.querySelectorAll(".underlineHover")
// var underlinebefore = window.getComputedStyle(underlineHover, "::before")


underlineHover.forEach((elem)=>{

    elem.addEventListener("mouseenter", ()=>{
        elem.style.setProperty('--trsx', '1')
        elem.style.setProperty('--tro', '0% 0')
        elem.style.setProperty('--opct', '1')
    })

    elem.addEventListener("mouseleave", ()=>{
        elem.style.setProperty('--trsx', '0')
        elem.style.setProperty('--tro', '100% 0')
        elem.style.setProperty('--opct', '1')
    
        setTimeout(()=>{
            elem.style.setProperty('--tro', '0% 0')
            elem.style.setProperty('--opct', '0')
        },200)
    })
})


