"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SwiperTab from '../../components/swiper-tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';
import useSticky from '../../components/hooks/use-sticky';
import ScrollToTop from '../../components/hooks/scroll-to-top';
import Sidebar from '../../components/sidebar';
import Count from '../../components/hooks/count';

const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.tp-testimonial-slider-dot',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + '<button>' + (index + 1) + '</button>' + '</span>';
    },
  },
  navigation: {
    nextEl: '.tp-testimonial-slider-button-next',
    prevEl: '.tp-testimonial-slider-button-prev',
  },
 
}


const Home = () => {
  const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
       setIsLoop(true)
    }, []) 
   const {sticky} =  useSticky()
   const [isOpen, setIsOpen]  = useState(false)


  return (
    <> 
  {/* <!-- offcanvas area start --> */}

   <div className={`offcanvas__area offcanvas-openedss ${isOpen ? "offcanvas-opened" : ""}`}>
        <div className="offcanvas__wrapper">
            <div className="offcanvas__close">
                <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setIsOpen(false)}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
            </div>
            {isOpen &&  <Sidebar />}
        </div>
        </div>
        <div className={`body-overlay ${isOpen ? "opened" : ""}`} onClick={() => setIsOpen(false)} ></div>
  
 
 {/* <!-- offcanvas area end --> */}

{/* <!-- header area start --> */}
<header>
    <div id="header-sticky" className={`tp-header-area tp-header-transparent tp-header-sticky tp-header-padding ${sticky && "header-sticky"}`}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-6">
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/img/logo/logo.svg" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                    <div className="main-menu smooth d-flex justify-content-center">
                        <nav className="tp-main-menu-content">
                            <ul>
                                <li><a href="#homeDemos">Demos</a></li>
                                <li><a href="#shopDemos">Shop</a></li>
                                <li><a href="#shopDemos">Pages</a></li>
                                <li><a href="#elements">Elements</a></li>
                                <li><a href="#features">Features</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-6">
                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                        <div className="tp-header-btn text-end d-none d-sm-block">
                            <a target="_blank" href="https://themeforest.net/item/shofy-ecommerce-nextjs-template/45884638?s_rank=1" className="tp-purchase-btn">
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5414 0.816389C9.67272 -1.37567 3.62548 2.87 3.67449 8.34315C3.67404 8.37657 3.66703 8.40932 3.65394 8.44003C3.64101 8.47058 3.6223 8.49835 3.59883 8.52179C3.57541 8.54545 3.54755 8.56426 3.51685 8.57712C3.48636 8.59022 3.45361 8.59722 3.42041 8.59767C3.39828 8.59745 3.3766 8.59451 3.35537 8.58864C3.33414 8.583 3.31381 8.57441 3.29484 8.56357C3.27587 8.55273 3.25825 8.53941 3.24244 8.52405C3.22686 8.50869 3.21308 8.49153 3.20179 8.47278C3.04822 8.13785 2.92626 7.78937 2.83796 7.43163C2.74965 7.07389 2.69522 6.7087 2.67557 6.3408C2.6557 5.9729 2.6706 5.60387 2.72006 5.23867C2.7693 4.87371 2.85309 4.51393 2.96985 4.16455C2.98747 4.11283 2.98656 4.0566 2.96714 4.00533C2.94798 3.95411 2.91163 3.91113 2.8643 3.88374C2.81697 3.85634 2.7616 3.84624 2.70764 3.85514C2.65389 3.86418 2.60466 3.89128 2.56852 3.93238C2.31941 4.1982 2.09583 4.48706 1.9007 4.79489C1.70557 5.10271 1.54002 5.42816 1.40587 5.76715C1.27194 6.10611 1.17009 6.45688 1.10165 6.81485C1.03342 7.17294 0.998937 7.53664 0.998668 7.90117C0.98986 8.67469 1.1353 9.44211 1.42687 10.1585C1.71834 10.8746 2.14995 11.5253 2.69635 12.0723C3.24262 12.6192 3.89269 13.0513 4.60836 13.3434C5.32387 13.6352 6.09053 13.7808 6.8632 13.7718C15.1133 13.5843 13.2092 2.77176 11.5414 0.816389Z" fill="currentColor"/>
                                </svg> Buy Shofy $17
                            </a>
                        </div>
                        <div className="tp-header-action-item tp-header-hamburger ml-20 d-lg-none">
                            <button type="button" className="tp-offcanvas-open-btn" onClick={() => setIsOpen(true)}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                  <rect x="10" width="20" height="2" fill="currentColor"/>
                                  <rect x="5" y="7" width="25" height="2" fill="currentColor"/>
                                  <rect x="10" y="14" width="20" height="2" fill="currentColor"/>
                               </svg>
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
{/* <!-- header area end --> */}

<main>
    {/* <!-- hero area start --> */}
    <section className="tp-hero-area p-relative z-index-1 fix grey-bg pb-95">
        <div className="tp-hero-shape">
            <img  className="tp-hero-shape-1" src="/assets/img/hero/shape/line.png" alt="theme-pure" />
            <span className="tp-hero-shape-2"></span>
            <span className="tp-hero-shape-3"></span>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="tp-hero-content p-relative z-index-1 text-center mb-60">
                        <span className="tp-hero-subtitle">Welcome to Shofy eCommerce!</span>

                        <h3 className="tp-hero-title">eCommerce Solution for Starting Online Shop</h3>
                        <p>Flexible, modern, powerful unique sections.</p>

                        <div className="tp-hero-btn">
                            <a href="#homeDemos" className="tp-btn-border">See Live Demos</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="tp-hero-thumb-wrapper p-relative z-index-1">
                        <div className="tp-hero-thumb-logo">
                            <img className="el first " style={{borderRadius: "none"}} src="/assets/img/hero/logo/next-js.png" alt="" data-parallax='{"y": -100, "smoothness": 10}' />
                            <img className="woo second next_js" style={{borderRadius: "none"}} src="/assets/img/hero/logo/express.png" alt="" data-parallax='{"y": -100, "smoothness": 10}' />
                            <img className="wp third next_js" src="/assets/img/hero/logo/m-db.png" alt="" data-parallax='{"y": -100, "smoothness": 10}' />
                        </div>
                        <div className="tp-hero-main-img w-img">
                            <img src="/assets/img/hero/hero-img.jpg" alt="theme-pure" />
                        </div>
                        <div className="tp-hero-mobile-img" data-parallax='{"y": -100, "smoothness": 10}'>
                            <img src="/assets/img/hero/mobile.jpg" alt="theme-pure" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- hero area emd --> */}

     {/* <!-- counter area start --> */}
     <section className="tp-counter-area grey-bg pb-30">
        <div className="container">
            <div className="tp-counter-inner pl-60">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="tp-counter-item d-flex align-items-start mb-30">
                            <div className="tp-counter-icon mr-15">
                                <span>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M11.3642 0.575106C12.2609 -0.191702 13.7293 -0.191702 14.639 0.575106L16.6922 2.34265C17.0821 2.68056 17.8098 2.95353 18.3296 2.95353H20.5388C21.9163 2.95353 23.0468 4.08424 23.0468 5.4619V7.67128C23.0468 8.17816 23.3197 8.91898 23.6576 9.30889L25.425 11.3624C26.1917 12.2592 26.1917 13.7278 25.425 14.6376L23.6576 16.691C23.3197 17.0809 23.0468 17.8088 23.0468 18.3286V20.5381C23.0468 21.9158 21.9163 23.0465 20.5388 23.0465H18.3296C17.8228 23.0465 17.0821 23.3194 16.6922 23.6574L14.639 25.4249C13.7423 26.1917 12.2739 26.1917 11.3642 25.4249L9.31102 23.6574C8.92117 23.3194 8.19343 23.0465 7.67362 23.0465H5.42545C4.04797 23.0465 2.9174 21.9158 2.9174 20.5381V18.3156C2.9174 17.8088 2.64452 17.0809 2.31964 16.691L0.565288 14.6246C-0.188429 13.7278 -0.188429 12.2722 0.565288 11.3754L2.31964 9.30889C2.64452 8.91898 2.9174 8.19117 2.9174 7.68429V5.4619C2.9174 4.08424 4.04797 2.95353 5.42545 2.95353H7.67362C8.18043 2.95353 8.92117 2.68056 9.31102 2.34265L11.3642 0.575106Z" fill="currentColor"/>
                                        <path d="M18.9403 11.778C18.6934 11.4271 18.2776 11.2321 17.7838 11.2321H15.2497C15.0808 11.2321 14.9249 11.1671 14.8209 11.0372C14.7169 10.9072 14.6649 10.7382 14.6909 10.5563L15.0028 8.5288C15.1328 7.93095 14.7299 7.2421 14.1322 7.04715C13.5734 6.8392 12.9106 7.12511 12.6507 7.51502L10.1296 11.2581V10.7902C10.1296 9.88045 9.73981 9.50356 8.77817 9.50356H8.14138C7.17974 9.50356 6.78992 9.88045 6.78992 10.7902V17.0027C6.78992 17.9125 7.17974 18.2894 8.14138 18.2894H8.77817C9.68783 18.2894 10.0777 17.9384 10.1167 17.1066L12.027 18.5753C12.2869 18.8352 12.8716 18.9782 13.2875 18.9782H15.6915C16.5232 18.9782 17.3549 18.3543 17.5369 17.5875L19.0573 12.9607C19.2263 12.5448 19.1872 12.1159 18.9403 11.778Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="tp-counter-content">
                                <h4><span className="purecounter" data-purecounter-duration="1" data-purecounter-end="7000">
                                    <Count number={7000} add_style={true} />
                                    </span>
                                </h4>
                                <p>Clients Trust Theme_Pure</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="tp-counter-item d-flex align-items-start mb-30">
                            <div className="tp-counter-icon mr-15">
                                <span>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M11.3642 0.575106C12.2609 -0.191702 13.7293 -0.191702 14.639 0.575106L16.6922 2.34265C17.0821 2.68056 17.8098 2.95353 18.3296 2.95353H20.5388C21.9163 2.95353 23.0468 4.08424 23.0468 5.4619V7.67128C23.0468 8.17816 23.3197 8.91898 23.6576 9.30889L25.425 11.3624C26.1917 12.2592 26.1917 13.7278 25.425 14.6376L23.6576 16.691C23.3197 17.0809 23.0468 17.8088 23.0468 18.3286V20.5381C23.0468 21.9158 21.9163 23.0465 20.5388 23.0465H18.3296C17.8228 23.0465 17.0821 23.3194 16.6922 23.6574L14.639 25.4249C13.7423 26.1917 12.2739 26.1917 11.3642 25.4249L9.31102 23.6574C8.92117 23.3194 8.19343 23.0465 7.67362 23.0465H5.42545C4.04797 23.0465 2.9174 21.9158 2.9174 20.5381V18.3156C2.9174 17.8088 2.64452 17.0809 2.31964 16.691L0.565288 14.6246C-0.188429 13.7278 -0.188429 12.2722 0.565288 11.3754L2.31964 9.30889C2.64452 8.91898 2.9174 8.19117 2.9174 7.68429V5.4619C2.9174 4.08424 4.04797 2.95353 5.42545 2.95353H7.67362C8.18043 2.95353 8.92117 2.68056 9.31102 2.34265L11.3642 0.575106Z" fill="currentColor"/>
                                        <path d="M18.9403 11.778C18.6934 11.4271 18.2776 11.2321 17.7838 11.2321H15.2497C15.0808 11.2321 14.9249 11.1671 14.8209 11.0372C14.7169 10.9072 14.6649 10.7382 14.6909 10.5563L15.0028 8.5288C15.1328 7.93095 14.7299 7.2421 14.1322 7.04715C13.5734 6.8392 12.9106 7.12511 12.6507 7.51502L10.1296 11.2581V10.7902C10.1296 9.88045 9.73981 9.50356 8.77817 9.50356H8.14138C7.17974 9.50356 6.78992 9.88045 6.78992 10.7902V17.0027C6.78992 17.9125 7.17974 18.2894 8.14138 18.2894H8.77817C9.68783 18.2894 10.0777 17.9384 10.1167 17.1066L12.027 18.5753C12.2869 18.8352 12.8716 18.9782 13.2875 18.9782H15.6915C16.5232 18.9782 17.3549 18.3543 17.5369 17.5875L19.0573 12.9607C19.2263 12.5448 19.1872 12.1159 18.9403 11.778Z" fill="currentColor"/>
                                        </svg>
                                </span>
                            </div>
                            <div className="tp-counter-content">
                                <h4><span>Free</span></h4>
                                <p>Lifetime Updates</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="tp-counter-item d-flex align-items-start mb-30">
                            <div className="tp-counter-icon mr-15">
                                <span>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M11.3642 0.575106C12.2609 -0.191702 13.7293 -0.191702 14.639 0.575106L16.6922 2.34265C17.0821 2.68056 17.8098 2.95353 18.3296 2.95353H20.5388C21.9163 2.95353 23.0468 4.08424 23.0468 5.4619V7.67128C23.0468 8.17816 23.3197 8.91898 23.6576 9.30889L25.425 11.3624C26.1917 12.2592 26.1917 13.7278 25.425 14.6376L23.6576 16.691C23.3197 17.0809 23.0468 17.8088 23.0468 18.3286V20.5381C23.0468 21.9158 21.9163 23.0465 20.5388 23.0465H18.3296C17.8228 23.0465 17.0821 23.3194 16.6922 23.6574L14.639 25.4249C13.7423 26.1917 12.2739 26.1917 11.3642 25.4249L9.31102 23.6574C8.92117 23.3194 8.19343 23.0465 7.67362 23.0465H5.42545C4.04797 23.0465 2.9174 21.9158 2.9174 20.5381V18.3156C2.9174 17.8088 2.64452 17.0809 2.31964 16.691L0.565288 14.6246C-0.188429 13.7278 -0.188429 12.2722 0.565288 11.3754L2.31964 9.30889C2.64452 8.91898 2.9174 8.19117 2.9174 7.68429V5.4619C2.9174 4.08424 4.04797 2.95353 5.42545 2.95353H7.67362C8.18043 2.95353 8.92117 2.68056 9.31102 2.34265L11.3642 0.575106Z" fill="currentColor"/>
                                        <path d="M18.9403 11.778C18.6934 11.4271 18.2776 11.2321 17.7838 11.2321H15.2497C15.0808 11.2321 14.9249 11.1671 14.8209 11.0372C14.7169 10.9072 14.6649 10.7382 14.6909 10.5563L15.0028 8.5288C15.1328 7.93095 14.7299 7.2421 14.1322 7.04715C13.5734 6.8392 12.9106 7.12511 12.6507 7.51502L10.1296 11.2581V10.7902C10.1296 9.88045 9.73981 9.50356 8.77817 9.50356H8.14138C7.17974 9.50356 6.78992 9.88045 6.78992 10.7902V17.0027C6.78992 17.9125 7.17974 18.2894 8.14138 18.2894H8.77817C9.68783 18.2894 10.0777 17.9384 10.1167 17.1066L12.027 18.5753C12.2869 18.8352 12.8716 18.9782 13.2875 18.9782H15.6915C16.5232 18.9782 17.3549 18.3543 17.5369 17.5875L19.0573 12.9607C19.2263 12.5448 19.1872 12.1159 18.9403 11.778Z" fill="currentColor"/>
                                        </svg>
                                </span>
                            </div>
                            <div className="tp-counter-content">
                                <h4><span>24/7</span></h4>
                                <p>Dedicated Support Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     {/* <!-- counter area end --> */}
    
    {/* <!-- demo area start --> */}
    <section id="homeDemos" className="tp-home-demo grey-bg pb-75">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="tp-section-title-wrapper mb-40 text-center">
                        <div className="tp-section-title-inner pt-125 d-inline-block">
                            <div className="tp-section-bg-text">
                                <span>4+</span>
                            </div>
                            <h3 className="tp-section-title">Prebuilt Demo Websites</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-home-item w-img text-center mb-50">
                        <a href="https://shofy-client.vercel.app/" target="_blank">
                            <div className="tp-home-thumb fix">
                                <img src="/assets/img/home/home-1.jpg" alt="theme-pure" />
                            </div>
                            <div className="tp-home-content">
                                <h3 className="tp-home-title">Electronics</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-home-item w-img text-center mb-50">
                        <a href="https://shofy-client.vercel.app/home-2" target="_blank">
                            <div className="tp-home-thumb fix">
                                <img src="/assets/img/home/home-2.jpg" alt="theme-pure" />
                            </div>
                            <div className="tp-home-content">
                                <h3 className="tp-home-title">Fashion</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-home-item w-img text-center mb-50">
                        <a href="https://shofy-client.vercel.app/home-3" target="_blank">
                            <div className="tp-home-thumb fix">
                                <img src="/assets/img/home/home-3.jpg" alt="theme-pure" />
                            </div>
                            <div className="tp-home-content">
                                <h3 className="tp-home-title">Beauty & Cosmetics</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-home-item w-img text-center mb-50">
                        <a href="https://shofy-client.vercel.app/home-4" target="_blank">
                            <div className="tp-home-thumb fix">
                                <img src="/assets/img/home/home-4.jpg" alt="theme-pure" />
                            </div>
                            <div className="tp-home-content">
                                <h3 className="tp-home-title">Jewelry</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-home-item w-img text-center mb-50">
                        <a href="#">
                            <div className="tp-home-thumb fix">
                                <img src="/assets/img/home/coming-soon.jpg" alt="theme-pure" />
                            </div>
                           
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- demo area end --> */}

    {/* <!-- features area start --> */}
    <section id="features" className="tp-features-area pb-100 pt-110">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="tp-features-section-title-wrapper text-center mb-50">
                        <h3 className="tp-features-section-title">All E-commerce Features and <br /> Apps are Included</h3>
                        <p>an eCommerce solution that turns more leads into customers.</p>
                    </div>
                </div>
            </div>  
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-features-item fix text-center mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-features-thumb">
                            <img src="/assets/img/features/features-1.png" alt="theme-pure" />
                        </div>
                        <div className="tp-features-content">
                            <h3 className="tp-features-title">Variation Swatch</h3>
                            <p>Create clean and professional product <br /> pages that capture your customer's <br /> attention</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 order-last order-lg-0">
                    <div className="tp-features-item tp-features-item-2 fix d-lg-flex align-items-end mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-features-thumb tp-features-thumb-2 mr-40">
                            <img src="/assets/img/features/features-2.png" alt="theme-pure" />
                        </div>
                        <div className="tp-features-content tp-features-content-2">
                            <h3 className="tp-features-title-2">Filter Variations,  Pagination, Filters by Size & Color</h3>
                            <p>Increase the conversion twice by <br /> reducing the time needed for <br /> customers to complete <br /> the order.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-features-item fix text-center mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-features-thumb">
                            <img src="/assets/img/features/features-3.png" alt="theme-pure" />
                        </div>
                        <div className="tp-features-content">
                            <h3 className="tp-features-title">Video Gallery</h3>
                            <p>Provide customers a detail view of <br /> products with an easy look</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-features-item fix text-center mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-features-thumb">
                            <img src="/assets/img/features/features-4.png" alt="theme-pure" />
                        </div>
                        <div className="tp-features-content">
                            <h3 className="tp-features-title">Sale Countdown Timer</h3>
                            <p>Boost sales and engagement for special <br /> occasions</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-features-item fix text-center mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-features-thumb">
                            <img src="/assets/img/features/features-5.png" alt="theme-pure" />
                        </div>
                        <div className="tp-features-content">
                            <h3 className="tp-features-title">Product Quick View</h3>
                            <p>Enable customers to see an overview of <br /> products without leaving current pages</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-features-item fix text-center mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-features-thumb">
                            <img src="/assets/img/features/features-7.png" alt="theme-pure" />
                        </div>
                        <div className="tp-features-content">
                            <h3 className="tp-features-title">Quantity Select</h3>
                            <p>2 options for you: dropdown select box or <br /> manually amount selection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- features area end --> */}

    {/* <!-- inner pages area start --> */}
    <SwiperTab />
    {/* <!-- inner pages area end --> */}

    {/* <!-- header footer demo area start --> */}
    <section className="tp-hf-area pt-120 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="tp-hf-item-wrapper mb-30 grey-bg p-relative z-index-1 fix">
                        <div className="tp-hf-shape">
                            <img className="tp-hf-shape-1" src="/assets/img/hf/shape_01.png" alt="theme-pure" />
                            <img className="tp-hf-shape-2" src="/assets/img/hf/shape_02.png" alt="theme-pure" />
                        </div>
                        <div className="tp-hf-item text-center  d-flex flex-column justify-content-between" data-bg-color="#E2E8FF">
                            <div className="tp-hf-content">
                                <h3 className="tp-hf-title">Header & Footer Style</h3>
                                <p>5+ modern footer layouts, unlimited customization options <br /> so you can create the perfect style for your store.</p>
                            </div>
                            <div className="tp-hf-thumb">
                                <img className="footer-img mb-10 w-100" src="/assets/img/hf/footer.png" alt="theme-pure" />
                                <img src="/assets/img/hf/header.png" alt="theme-pure" />
                            </div>
                        </div>
                        <div className="tp-hf-text">
                            <span className="d-none">Header & Footer</span>
                            <img src="/assets/img/hf/hf-text.png" alt="theme-pure" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="tp-optimized-item text-center p-relative z-index-1 mb-30" data-bg-color="#F5EFF8">
                        <div className="tp-optimized-shape">
                            <img className="tp-optimized-shape-1" src="/assets/img/optimized/ellipse_01.png" alt="theme-pure" />
                            <img className="tp-optimized-shape-2" src="/assets/img/optimized/ellipse_02.png" alt="theme-pure" />
                            <img className="tp-optimized-shape-3" src="/assets/img/optimized/ellipse_03.png" alt="theme-pure" />
                        </div>
                        <div className="tp-optimized-content">
                            <h3 className="tp-optimized-title">Mobile Optimized</h3>
                            <p>Quick and easy to use tho most important thing for <br /> selling product on mobile</p>
                        </div>import product_data from './../../data/product-data';
import { useState } from 'react';

                        <div className="tp-optimized-thumb text-end">
                            <img src="/assets/img/optimized/mobile.png" alt="theme-pure" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- header footer demo area end --> */}

    {/* <!-- elements area start --> */}
    <section id="elements" className="tp-elements-area p-relative z-index-1 fix pb-75 pt-105" data-bg-color="#F6F4F3">
        <div className="tp-elements-shape">
            <img className="tp-elements-shape-1" src="/assets/img/elements/shape-1.png" alt="theme-pure" />
        </div>
        <div className="container-fluid gx-lg-0">
            <div className="row gx-lg-0">
                <div className="col-xl-12">
                    <div className="tp-elements-wrapper">
                        <div className="tp-elements-section-title-wrapper text-center mb-60">
                            <h3 className="tp-elements-section-title">Beautifully <br /> Designed Shop Elements</h3>
                            <p>Pre-designed elements with specifically useful function facilitate the success of your online store.</p>
                        </div>
                        <div className="tp-elements-content d-flex align-items-center">
                            <div className="tp-elements-thumb tp-elements-slide-item d-flex align-items-center horizontal-slider">
                                <img src="/assets/img/elements/element-full.png" alt="theme-pure" />
                                <img src="/assets/img/elements/element-full.png" alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- elements area end --> */}

    {/* <!-- plugin area start --> */}
    <section className="tp-plugin-area p-relative z-index-1 pt-140">
        <div className="tp-plugin-shape">
            <img className="tp-plugin-shape-1" src="/assets/img/plugin/shape.png" alt="theme-pure" />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="tp-plugin-section-title-wrapper mb-65">
                        <h3 className="tp-plugin-section-title">Compatible Plugins</h3>
                        <p>Our template has the highest level Of compatibility with the most popular plugins</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/hero/logo/next-js.png" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">Next js</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/hero/logo/exp.png" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">Express js</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/hero/logo/mongo-db.png" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">Mongodb</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/hero/logo/RTK.png" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">RTK query</h3>
                    </div>
                </div>
                
                <div className="col-xl-2 d-none d-xl-block"></div>
                <div className="col-xl-2 d-none d-xl-block"></div>

                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/hero/logo/nodemailer.webp" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">Nodemailer</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/hero/logo/stripe.png" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">Stripe</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/plugin/google-fonts.png" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">Google Fonts</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/plugin/seo.svg" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">SEO Optimized</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/plugin/code.svg" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">Standard Code</h3>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-plugin-item text-center grey-bg mb-25" data-bg-color="#F8F8F8">
                        <div className="tp-plugin-icon">
                            <span>
                                <img src="/assets/img/plugin/support.svg" alt="theme-pure" />
                            </span>
                        </div>
                        <h3 className="tp-plugin-title">24/7 Support</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- plugin area end --> */}

    {/* <!-- testimonial area start --> */}
    <section className="tp-testimonial-area grey-bg-7 pt-130 pb-95">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-12">
                    <div className="tp-testimonial-slider p-relative z-index-1">
                    <div className="tp-testimonial-shape">
                        <span className="tp-testimonial-shape-gradient"></span>
                    </div>
                    <h3 className="tp-testimonial-section-title text-center">The Review Are In</h3>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-10">
                            <Swiper 
                             {...setting} 
                             loop={isLoop}
                             modules={[Navigation, EffectFade]}  
                            
                            className="tp-testimonial-slider-active swiper-container">
                                {/* <div className="swiper-wrapper"> */}
                                <SwiperSlide className="tp-testimonial-item text-center mb-20 swiper-slide">
                                    <div className="tp-testimonial-rating">
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                    </div>
                                    <div className="tp-testimonial-content">
                                        <p>“ How you use the city or town name is up to you. All results may be freely used in any work.”</p>
                                    </div>
                                    <div className="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                        <div className="tp-testimonial-user d-flex align-items-center">
                                            <div className="tp-testimonial-avater mr-10">
                                                <img src="/assets/img/users/user-2.jpg" alt="theme-pure" />
                                            </div>
                                            <div className="tp-testimonial-user-info tp-testimonial-user-translate">
                                                <h3 className="tp-testimonial-user-title">Theodore Handle</h3>
                                                <span className="tp-testimonial-designation">CO Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="tp-testimonial-item text-center mb-20 swiper-slide">
                                    <div className="tp-testimonial-rating">
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                    </div>
                                    <div className="tp-testimonial-content">
                                        <p>“Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!”</p>
                                    </div>
                                    <div className="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                        <div className="tp-testimonial-user d-flex align-items-center">
                                            <div className="tp-testimonial-avater mr-10">
                                            <img src="/assets/img/users/user-3.jpg" alt="theme-pure" />
                                            </div>
                                            <div className="tp-testimonial-user-info tp-testimonial-user-translate">
                                            <h3 className="tp-testimonial-user-title">Shahnewaz Sakil</h3>
                                            <span className="tp-testimonial-designation">UI/UX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="tp-testimonial-item text-center mb-20 swiper-slide">
                                    <div className="tp-testimonial-rating">
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                        <span><img src="/assets/img/icon/star.svg" alt="theme-pure" /></span>
                                    </div>
                                    <div className="tp-testimonial-content">
                                        <p>“Thanks for all your efforts and teamwork over the last several months!  Thank you so much”</p>
                                    </div>
                                    <div className="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                        <div className="tp-testimonial-user d-flex align-items-center">
                                            <div className="tp-testimonial-avater mr-10">
                                            <img src="/assets/img/users/user-4.jpg" alt="theme-pure" />
                                            </div>
                                            <div className="tp-testimonial-user-info tp-testimonial-user-translate">
                                            <h3 className="tp-testimonial-user-title">James Dopli</h3>
                                            <span className="tp-testimonial-designation">Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* </div> */}
                            </Swiper>
                        </div>
                    </div>
                    <div className="tp-testimonial-arrow d-none d-md-block">
                        <button className="tp-testimonial-slider-button-prev">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.061 6.99959L16 6.99959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.08618 1L1.06079 6.9995L7.08618 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="tp-testimonial-slider-button-next">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.939 6.99959L1 6.99959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.91382 1L15.9392 6.9995L9.91382 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="tp-testimonial-slider-dot tp-swiper-dot text-center mt-30 tp-swiper-dot-style-darkRed d-md-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- testimonial area end --> */}

</main>

{/* <!-- footer  --> */}
    <footer>
        <div className="tp-footer-area pb-55 pt-150 p-relative z-index-1 fix" style={{backgroundColor: "#ECEEF3"}}>
            <div className="tp-footer-shape">
                <img className="tp-footer-shape-1" src="/assets/img/footer/footer-shape-1.png" alt="theme-pure" />
                <img className="tp-footer-shape-2" src="/assets/img/footer/footer-shape-2.png" alt="theme-pure" />
                <img className="tp-footer-shape-3" src="/assets/img/footer/footer-shape-3.png" alt="theme-pure" />
                <img className="tp-footer-shape-4" src="/assets/img/footer/footer-shape-4.png" alt="theme-pure" />
                <img className="tp-footer-shape-5" src="/assets/img/footer/footer-shape-5.png" alt="theme-pure" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-footer-content p-relative z-index-1 text-center">
                            <span className="tp-footer-subtitle">Shofy eCommerce!</span>

                            <h3 className="tp-footer-title">Start Your Online Store <br /> With Shofy</h3>
                            <p>Flexible, modern, powerful unique sections.</p>

                            <div className="tp-footer-btn">
                                <a target="_blank" href="https://themeforest.net/item/shofy-ecommerce-nextjs-template/45884638?s_rank=1" className="tp-purchase-btn tp-purchase-btn-green">  
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5414 0.816389C9.67272 -1.37567 3.62548 2.87 3.67449 8.34315C3.67404 8.37657 3.66703 8.40932 3.65394 8.44003C3.64101 8.47058 3.6223 8.49835 3.59883 8.52179C3.57541 8.54545 3.54755 8.56426 3.51685 8.57712C3.48636 8.59022 3.45361 8.59722 3.42041 8.59767C3.39828 8.59745 3.3766 8.59451 3.35537 8.58864C3.33414 8.583 3.31381 8.57441 3.29484 8.56357C3.27587 8.55273 3.25825 8.53941 3.24244 8.52405C3.22686 8.50869 3.21308 8.49153 3.20179 8.47278C3.04822 8.13785 2.92626 7.78937 2.83796 7.43163C2.74965 7.07389 2.69522 6.7087 2.67557 6.3408C2.6557 5.9729 2.6706 5.60387 2.72006 5.23867C2.7693 4.87371 2.85309 4.51393 2.96985 4.16455C2.98747 4.11283 2.98656 4.0566 2.96714 4.00533C2.94798 3.95411 2.91163 3.91113 2.8643 3.88374C2.81697 3.85634 2.7616 3.84624 2.70764 3.85514C2.65389 3.86418 2.60466 3.89128 2.56852 3.93238C2.31941 4.1982 2.09583 4.48706 1.9007 4.79489C1.70557 5.10271 1.54002 5.42816 1.40587 5.76715C1.27194 6.10611 1.17009 6.45688 1.10165 6.81485C1.03342 7.17294 0.998937 7.53664 0.998668 7.90117C0.98986 8.67469 1.1353 9.44211 1.42687 10.1585C1.71834 10.8746 2.14995 11.5253 2.69635 12.0723C3.24262 12.6192 3.89269 13.0513 4.60836 13.3434C5.32387 13.6352 6.09053 13.7808 6.8632 13.7718C15.1133 13.5843 13.2092 2.77176 11.5414 0.816389Z" fill="currentColor"/>
                                </svg> Buy Shofy $17</a>
                            </div>

                            <div className="tp-footer-copyright">
                                <p>2023 © All rights reserved. Developed by <a href="https://themeforest.net/user/theme_pure">Theme Pure</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <ScrollToTop />
 
    </>
  );
};

export default Home; 