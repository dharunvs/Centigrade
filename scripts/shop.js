let bannerPages = ["bd1", , "bd2", "bd3", "bd4"];


bannerAnimate = (page) => {
  var distance = 0;
  if (page == "bd1") {
    distance = 0;
  }
  if (page == "bd2") {
    distance = -100;
  }
  if (page == "bd3") {
    distance = -200;
  }
  if (page == "bd4") {
    distance = -300;
  }
  tl.to(".banner-gallery", { x: "" + distance + "%", duration: 1 });
};

let currentBannerPage = 0
pnButtonAnimate = (type) => {
  var dis = 0;
  
  if (type == 'prev'){
    currentBannerPage += 1
  };
  if (type == 'next'){
    currentBannerPage -=1
  };


  dis = 100*currentBannerPage

  if (dis > 300){
    dis = 300
  }
  tl.to(".banner-gallery", { x: "" + dis + "%", duration: 1 });
} 
