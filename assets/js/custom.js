// ======================= Slick Sliders =======================

// Service Slider
if ($(".serviceSlider").length) {
  $(".serviceSlider").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
}

// Testimonial Slider
if ($(".testimonialSliderMain").length) {
  $(".testimonialSliderMain").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  });
}

// ======================= Counter Animation =======================
const counters = document.querySelectorAll(".upcounter");
if (counters.length) {
  const speed = 10000;

  function startCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    const updateCount = () => {
      const count = +counter.innerText.replace(/\D/g, "");
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = (count + increment) + suffix;
        setTimeout(updateCount, 70);
      } else {
        counter.innerText = target + suffix;
      }
    };
    updateCount();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        if (!counter.classList.contains("done")) {
          startCounter(counter);
          counter.classList.add("done");
        }
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// ======================= Pricing Slider =======================
function initPricingSlick(slider) {
  slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="26.5" cy="26.5" r="26.5" transform="rotate(-180 26.5 26.5)" fill="#BC0881"/><path d="M17.2929 26.3027C16.9024 26.6932 16.9024 27.3263 17.2929 27.7169L23.6569 34.0808C24.0474 34.4714 24.6805 34.4714 25.0711 34.0808C25.4616 33.6903 25.4616 33.0571 25.0711 32.6666L19.4142 27.0098L25.0711 21.3529C25.4616 20.9624 25.4616 20.3292 25.0711 19.9387C24.6805 19.5482 24.0474 19.5482 23.6569 19.9387L17.2929 26.3027ZM35 27.0098L35 26.0098L18 26.0098L18 27.0098L18 28.0098L35 28.0098L35 27.0098Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="26.5" cy="26.5" r="26.5" fill="#BC0881"/><path d="M35.7071 27.7071C36.0976 27.3166 36.0976 26.6834 35.7071 26.2929L29.3431 19.9289C28.9526 19.5384 28.3195 19.5384 27.9289 19.9289C27.5384 20.3195 27.5384 20.9526 27.9289 21.3431L33.5858 27L27.9289 32.6569C27.5384 33.0474 27.5384 33.6805 27.9289 34.0711C28.3195 34.4616 28.9526 34.4616 29.3431 34.0711L35.7071 27.7071ZM18 27V28H35V27V26H18V27Z" fill="white"/></svg></button>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } }
    ]
  });
}

if ($(".pricingSliderMain").length) {
  $(".pricingSliderMain").each(function () {
    if ($(this).hasClass("slick-initialized")) {
      $(this).slick("unslick");
    }
  });
  initPricingSlick($(".tab-content-1.active .pricingSliderMain"));

  $(".tab-btn-1").on("click", function () {
    let tabId = $(this).data("tab");

    $(".tab-btn-1").removeClass("active");
    $(".tab-content-1").removeClass("active");

    $(this).addClass("active");
    $("#" + tabId).addClass("active");

    let $slider = $("#" + tabId).find(".pricingSliderMain");
    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }
    setTimeout(() => {
      initPricingSlick($slider);
    }, 50);
  });
}

// ======================= Service Sliders =======================
function initServiceSlick(slider) {
  if (slider.length && !slider.hasClass("slick-initialized")) {
    slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 800,
      responsive: [
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        { breakpoint: 767, settings: { slidesToShow: 1 } }
      ]
    });
  }
}

function initServiceSlick2(slider) {
  if (slider.length && !slider.hasClass("slick-initialized")) {
    slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 800,
      rtl: true,
      responsive: [
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        { breakpoint: 767, settings: { slidesToShow: 1 } }
      ]
    });
  }
}

// ----------------- TAB + NON-TAB LOGIC -----------------

// serviceSliderMain (LTR)
if ($(".serviceSliderMain").length) {
  // init for NON-TAB sliders
  $(".serviceSliderMain").each(function () {
    if (!$(this).closest(".tab-content-2").length) {
      initServiceSlick($(this));
    }
  });

  // init for TAB active slider
  initServiceSlick($(".tab-content-2.active .serviceSliderMain"));

  // tab click handling
  $(".tab-btn-2").on("click", function () {
    let tabId = $(this).data("tab");

    $(".tab-btn-2").removeClass("active");
    $(".tab-content-2").removeClass("active");

    $(this).addClass("active");
    $("#" + tabId).addClass("active");

    let $slider2 = $("#" + tabId).find(".serviceSliderMain");
    if ($slider2.hasClass("slick-initialized")) {
      $slider2.slick("unslick");
    }
    setTimeout(() => {
      initServiceSlick($slider2);
    }, 50);
  });
}

// serviceSliderMain2 (RTL)
if ($(".serviceSliderMain2").length) {
  // init for NON-TAB sliders
  $(".serviceSliderMain2").each(function () {
    if (!$(this).closest(".tab-content-2").length) {
      initServiceSlick2($(this));
    }
  });

  // init for TAB active slider
  initServiceSlick2($(".tab-content-2.active .serviceSliderMain2"));

  // tab click handling
  $(".tab-btn-2").on("click", function () {
    let tabId = $(this).data("tab");

    $(".tab-btn-2").removeClass("active");
    $(".tab-content-2").removeClass("active");

    $(this).addClass("active");
    $("#" + tabId).addClass("active");

    let $slider3 = $("#" + tabId).find(".serviceSliderMain2");
    if ($slider3.hasClass("slick-initialized")) {
      $slider3.slick("unslick");
    }
    setTimeout(() => {
      initServiceSlick2($slider3);
    }, 200);
  });
}

// ======================= Hero Banner Mouse Follow =======================
const section = document.querySelector(".heroBanner");
const img = document.querySelector("img.bannerimg03");

if (section && img) {
  section.addEventListener("mousemove", (e) => {
    const bounds = section.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    gsap.to(img, {
      duration: 0.4,
      x: x - bounds.width / 2,
      y: y - bounds.height / 2,
      ease: "power3.out"
    });
  });

  section.addEventListener("mouseleave", () => {
    gsap.to(img, {
      duration: 0.6,
      x: 0,
      y: 0,
      ease: "power3.inOut"
    });
  });
}

// ======================= Bouncing Ball HomeSec02 =======================
const img_homeSec02 = document.querySelector(".homeSec02 .animatedImages img");
const container_homeSec02 = document.querySelector(".homeSec02");

if (img_homeSec02 && container_homeSec02) {
  let posX = 50, posY = 50, velX = 3, velY = 2;

  function bounce() {
    const cw = container_homeSec02.clientWidth;
    const ch = container_homeSec02.clientHeight;
    const iw = img_homeSec02.clientWidth;
    const ih = img_homeSec02.clientHeight;

    posX += velX;
    posY += velY;

    if (posX + iw >= cw || posX <= 0) {
      velX *= -1;
      img_homeSec02.style.filter = "blur(3px)";
    }
    if (posY + ih >= ch || posY <= 0) {
      velY *= -1;
      img_homeSec02.style.filter = "blur(3px)";
    }

    setTimeout(() => img_homeSec02.style.filter = "blur(0px)", 200);

    img_homeSec02.style.left = posX + "px";
    img_homeSec02.style.top = posY + "px";

    requestAnimationFrame(bounce);
  }
  bounce();
}

const img_boutSec02 = document.querySelector(".aboutSec02 .bounseBall");
const container_boutSec02 = document.querySelector(".aboutSec02");

if (img_boutSec02 && container_boutSec02) {
  let posX_bout = 50, posY_bout = 50, velX_bout = 3, velY_bout = 2;

  function bounceBall() {
    const cw_bout = container_boutSec02.clientWidth;
    const ch_bout = container_boutSec02.clientHeight;
    const iw_bout = img_boutSec02.clientWidth;
    const ih_bout = img_boutSec02.clientHeight;

    posX_bout += velX_bout;
    posY_bout += velY_bout;

    if (posX_bout + iw_bout >= cw_bout || posX_bout <= 0) {
      velX_bout *= -1;
      img_boutSec02.style.filter = "blur(3px)";
    }
    if (posY_bout + ih_bout >= ch_bout || posY_bout <= 0) {
      velY_bout *= -1;
      img_boutSec02.style.filter = "blur(3px)";
    }

    setTimeout(() => img_boutSec02.style.filter = "blur(0px)", 200);

    img_boutSec02.style.left = posX_bout + "px";
    img_boutSec02.style.top = posY_bout + "px";

    requestAnimationFrame(bounceBall);
  }
  bounceBall();
}


// ======================= Bouncing Ball HomeSec04 =======================
const bounceImg_homeSec04 = document.querySelector(".homeSec04 .animatedimages img");
const bounceContainer_homeSec04 = document.querySelector(".homeSec04");

if (bounceImg_homeSec04 && bounceContainer_homeSec04) {
  let posX = 50, posY = 50, velX = 3, velY = 2;

  function bounce2() {
    const cw = bounceContainer_homeSec04.clientWidth;
    const ch = bounceContainer_homeSec04.clientHeight;
    const iw = bounceImg_homeSec04.clientWidth;
    const ih = bounceImg_homeSec04.clientHeight;

    posX += velX;
    posY += velY;

    if (posX + iw >= cw || posX <= 0) {
      velX *= -1;
      bounceImg_homeSec04.style.filter = "blur(3px)";
    }
    if (posY + ih >= ch || posY <= 0) {
      velY *= -1;
      bounceImg_homeSec04.style.filter = "blur(3px)";
    }

    setTimeout(() => bounceImg_homeSec04.style.filter = "blur(0px)", 200);

    bounceImg_homeSec04.style.left = posX + "px";
    bounceImg_homeSec04.style.top = posY + "px";

    requestAnimationFrame(bounce2);
  }
  bounce2();
}

// ======================= GSAP Scroll Animations =======================
// ======================= GSAP Scroll Animations =======================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && typeof ScrollSmoother !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Left side se aane wala
  if (document.querySelector(".handslide")) {
    gsap.fromTo(".handslide",
      { x: -1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".homeSec06",
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        }
      }
    );
  }

  // Right side se aane wala
  if (document.querySelector(".rightvisiblehand")) {
    gsap.fromTo(".rightvisiblehand",
      { x: 1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".aboutSec01",
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        }
      }
    );
  }

  // Smooth scroll
  if (document.querySelector('#smooth-wrapper')) {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2.5,
      effects: true,
    });

    // Anchor smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          smoother.scrollTo(targetElem, true, "top top");
        }
      });
    });
  }
}


// ======================= Menu Animation =======================
function menu() {
  const menuInner = $(".js-menu-inner");
  if (!menuInner.length) return;

  const menuTrigger = $(".js-menu-trigger");
  const menuClose = $(".js-menu-close");
  const bgItems = $(".js-menu-inner-background i");
  const menuItem = $(".js-menu-items-list li");
  const shapePath = $(".js-items-shape-path");
  const activeItem = $(".js-menu-item.is-active");

  const tl = gsap.timeline({ paused: true });

  tl.to(menuInner, { autoAlpha: 1, duration: 1, ease: "power4.out" }, "start")
    .fromTo(bgItems, { x: "-100%", autoAlpha: 0 }, { x: "0%", autoAlpha: 1, duration: 0.25 }, "start")
    .fromTo(menuItem, { x: -30, autoAlpha: 0 }, {
      x: 0,
      autoAlpha: 1,
      delay: 0.35,
      duration: 0.4,
      stagger: 0.15,
      ease: "back.out(1)"
    }, "start")
    .fromTo(menuClose, { x: -10, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.2, delay: 1 }, "start");

  menuTrigger.on("click", () => tl.play());
  menuClose.on("click", () => {
    tl.timeScale(1.25);
    tl.reverse();
  });

  $(".js-menu-items-list li").on("mouseenter", function () {
    const morphPath = $(this).data("morph");
    gsap.to(shapePath, { duration: 1, morphSVG: morphPath });
  });

  $(".js-menu-items-wrapper").on("mouseleave", function () {
    gsap.to(shapePath, {
      duration: 1,
      morphSVG: activeItem.data("morph")
    });
  });
}
menu();


// Target section
const aboutSec02 = document.querySelector(".aboutSec02");

// Intersection Observer setup
let observerAboutSec02 = new IntersectionObserver((entries, observerAboutSec02) => {
  entries.forEach(entryAboutSec02 => {
    if (entryAboutSec02.isIntersecting && entryAboutSec02.intersectionRatio >= 0.5) {
      
      // Run progress animation
      document.querySelectorAll(".progress-container").forEach(progressContainer02 => {
        let targetPercent02 = parseInt(progressContainer02.getAttribute("data-percent"));
        let fill02 = progressContainer02.querySelector(".progress-fill");
        let value02 = progressContainer02.querySelector(".progress-value");
        let bar02 = progressContainer02.querySelector(".progress-bar");

        let duration02 = 2000; // total animation time in ms
        let start02 = null;

        function animateProgress02(timestamp02) {
          if (!start02) start02 = timestamp02;
          let progress02 = Math.min((timestamp02 - start02) / duration02, 1);
          let currentPercent02 = Math.floor(progress02 * targetPercent02);

          // Update bar width
          fill02.style.width = currentPercent02 + "%";

          // Update bubble text
          value02.textContent = currentPercent02 + "%";

          // Update bubble position
          let barWidth02 = bar02.offsetWidth;
          let newLeft02 = (barWidth02 * currentPercent02) / 100;
          value02.style.left = newLeft02 + "px";

          if (progress02 < 1) {
            requestAnimationFrame(animateProgress02);
          }
        }

        requestAnimationFrame(animateProgress02);
      });

      // Stop observing (animation sirf 1 dafa chale)
      observerAboutSec02.unobserve(entryAboutSec02.target);
    }
  });
}, { threshold: 0.5 }); // 50% visible hone par trigger hoga

// Start observing section
if (aboutSec02) observerAboutSec02.observe(aboutSec02);
