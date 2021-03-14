const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.fromTo(
  ".text",
  { opacity: 1 },
  { opacity: 0, duration: 1, stagger: 0.25, delay: 1 }
);
tl.to(".slider", { y: "-100%", duration: 1, delay: 1 }, "-=2");
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

let pages = ["landing", , "team", "contact", "shop"];
var currentPage = "landing";
document.getElementById(currentPage).style.fontWeight = "bold";

pageAnimate = (page) => {
  var distance = 0;
  if (page == "landing") {
    distance = 0;
    currentPage = "landing";
  }
  if (page == "team") {
    currentPage = "team";
    distance = 100;
  }
  if (page == "contact") {
    currentPage = "contact";
    distance = 200;
  }
  if (page == "shop") {
    currentPage = "shop";
    distance = -100;
  }
  tl.to(".pages", { x: "" + distance + "%", duration: 0.5 });

  for (i in pages) {
    document.getElementById(pages[i]).style.fontWeight = "normal";
    document.getElementById(pages[i]).style.color = "var(--color-blue)";
  }
  document.getElementById(currentPage).style.fontWeight = "bolder";
  document.getElementById(currentPage).style.color = "black";
};
