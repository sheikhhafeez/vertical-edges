<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertical Edges</title>

  <!-- Favicon -->
  <link rel="icon" href="assets/images/favicon.png" type="image/png" sizes="32x32" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <!-- Font Awesome 6 -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <!-- Animate.css (for WOW.js) -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <!-- Project CSS -->
  <link rel="stylesheet" href="assets/css/lib.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>

<body>

    <div id="smooth-wrapper">
<div id="smooth-content">

    <div class="mobileHeader">
         <div class="menu">
            <div class="mobileTwoBox">
                <a href="index.php"><img src="assets/images/colored-logo.png" alt=""></a>
                <div class="menu__trigger js-menu-trigger"><span>MENU</span></div>
            </div>

    <div class="menu__inner js-menu-inner">
      <ul class="menu__inner-background js-menu-inner-background">
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
      </ul>

      <div class="menu__items-wrapper js-menu-items-wrapper">
        <ul class="menu__items-list js-menu-items-list">
          <li class="js-menu-item is-active" data-morph="M0,0 L100,0 L100,100 L0,100 Z">
            <a href="index.php">Home</a>
          </li>
          <li class="js-menu-item" data-morph="M0,0 L100,0 L100,100 L0,100 Z">
            <a href="about.php">About us</a>
          </li>
          <li class="js-menu-item" data-morph="M0,0 L100,0 L100,100 L0,100 Z">
            <a href="javascript:void(0)">Service</a>
          </li>
          <li class="js-menu-item" data-morph="M0,0 L100,0 L100,100 L0,100 Z">
            <a href="portfolio.php">Portfolio</a>
          </li>
          <li class="js-menu-item" data-morph="M0,0 L100,0 L100,100 L0,100 Z">
            <a href="pricing.php">Pricing</a>
          </li>
          <li class="js-menu-item" data-morph="M0,0 L100,0 L100,100 L0,100 Z">
            <a href="contact.php">Contact</a>
          </li>
        </ul>
      </div>

      <div class="menu__trigger menu__trigger--close js-menu-close"><span>Close</span></div>
    </div>
  </div>

  <svg width="0" height="0" style="position: absolute">
    <path class="js-items-shape-path" d="M0,0 L100,0 L100,100 L0,100 Z" />
  </svg>
    </div>

<header>
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-lg-4">
                <div class="img-box">
                    <a href="index.php"><img src="assets/images/logo.png" alt="image"></a>
                </div>
            </div>
            <div class="col-lg-4">
                <ul class="headerMenu">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="javascript:void(0)">Services +</a>
                    <ul>
                        <li><a href="branding.php">Branding</a></li>
                         <li><a href="website-design-developnment.php">Website Design & Development</a></li>
                      <li><a href="shopify.php">Shopify</a></li>
                     
                      <li><a href="social-media-managemnet.php">Social Media Management</a></li>
                      
                    </ul>
                    </li>
                    <li><a href="portfolio.php">Portfolio</a></li>
                    <li><a href="pricing.php">Pricing</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </div>
            <div class="col-lg-4">
                <div class="btnBox">
                    <a href="portfolio.php" class="btn t-btn"><span>Explore More</span> <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25.3224" cy="24.6774" r="24.6774" fill="#242424"/>
                    <path d="M19.2902 31.7095L32.4515 18.5482" stroke="#FFF8F8" stroke-width="1.09677"/>
                    <path d="M19.2902 18H32.4515V31.1613" stroke="#FFF8F8" stroke-width="1.09677"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>