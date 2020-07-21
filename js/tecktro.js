// Scroll Trigger (GSAP)
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

// create a sequence that moves 5 of the panels in from different directions 
const tl = gsap.timeline();
tl.from(".principal", { xPercent: 0 })
	.from(".about", { xPercent: 100 })
	.from(".skills", { xPercent: 100 })
	.from(".projects", { yPercent: -100 })
	.from(".technologies", { yPercent: 100 });

// pin the container and link the animation to the scrollbar (scrub: true).
ScrollTrigger.create({
	animation: tl,
	trigger: "#containerg",
	start: "top top",
	end: "+=600%",
	scrub: true,
	pin: true,
	anticipatePin: 0
});

// Cursor-Dot
const cursors = curDot();
cursors.over('.principal p', {
	background: "#B2DFDB"
});
