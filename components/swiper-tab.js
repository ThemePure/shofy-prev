"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import product_data from '../data/product-data';
import Link from 'next/link';
import Image from 'next/image';
import product_data_2 from '../data/product-data-2';
import product_data_3 from '../data/product-data-3';


const setting_1 = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    observer: true,
    observeParents: true,
  
    // Navigation arrows
    navigation: {
      nextEl: ".tp-inner-button-next",
      prevEl: ".tp-inner-button-prev",
    },
    scrollbar: {
      el: '.tp-inner-product-scrollbar',
      draggable: true,
      dragClass: 'tp-swiper-scrollbar-drag',
      snapOnRelease: true,
    },
    breakpoints: {
      '1200': {
        slidesPerView: 3,
      },
      '992': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    }, 
  }
const SwiperTab = () => {
    return (
        <>

<section id="shopDemos" className="tp-inner-area black-bg pt-105 pb-90 include-bg p-relative z-index-1 fix" >
        <div className="tp-inner-shape">
            <img className="tp-inner-shape-1" data-parallax='{"y": -50, "smoothness": 10}' src="assets/img/inner/shape/shape-1.png" alt="theme-pure" />
            <span className="tp-inner-shape-2" data-parallax='{"y": -100, "smoothness": 10}'></span>
            <span className="tp-inner-shape-3" data-parallax='{"y": 100, "smoothness": 10}'></span>
            <span className="tp-inner-shape-4" data-parallax='{"y": -50, "smoothness": 10}'></span>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="tp-section-title-wrapper  is-white mb-30 text-center">
                        <div className="tp-section-title-inner d-inline-block">
                            <h3 className="tp-section-title text-white">Inner Pages Collections</h3>
                            <p>Unsen comes with a huge library of inner page layouts that cover all your needs. From Product, Collection to <br /> FAQ, Size chart page, etc., Unsen makes every detail a perfection.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="tp-inner-tab tp-tab mb-65">
                        <nav>
                            <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                              <button 
                              className="nav-link active" 
                              id="nav-product-tab" 
                              data-bs-toggle="tab" 
                              data-bs-target="#nav-product" 
                              type="button" 
                              role="tab" 
                              aria-controls="nav-product" 
                              aria-selected="true"
                              >
                                Product Pages
                              </button>
                              <button 
                              className="nav-link" 
                              id="nav-shop-tab" 
                              data-bs-toggle="tab" 
                              data-bs-target="#nav-shop" 
                              type="button" 
                              role="tab" 
                              aria-controls="nav-shop" 
                              aria-selected="false"
                              >
                                Shop Pages
                              </button>
                              <button 
                              className="nav-link" 
                              id="nav-other-tab" 
                              data-bs-toggle="tab" 
                              data-bs-target="#nav-other" 
                              type="button" 
                              role="tab" 
                              aria-controls="nav-other" 
                              aria-selected="false"
                              >
                                Other Pages
                              </button>
                            </div>
                          </nav>                              
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-product" role="tabpanel" aria-labelledby="nav-product-tab" tabIndex="-1">
                            <div className="tp-inner-product-slider">
                                <Swiper {...setting_1} className="tp-inner-product-slider-active swiper-container">
                                   {product_data.map((item, i) => 
                                    <SwiperSlide key={i} className="tp-inner-item w-img swiper-slide">
                                        <Link href={item.link} target="_blank">
                                            <Image src={item.img} alt="theme-pure" />
                                        </Link>
                                    </SwiperSlide> 
                                   )}                                     
                                </Swiper>
                                <div className="tp-inner-product-scrollbar tp-swiper-scrollbar mt-80"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-shop" role="tabpanel" aria-labelledby="nav-shop-tab" tabIndex="-1">
                            <div className="tp-inner-shop-slider">                                
                                <Swiper {...setting_1} className="tp-inner-shop-slider-active swiper-container">
                                    {product_data_2.map((product, i) => 
                                        <SwiperSlide key={i} className="tp-inner-item w-img swiper-slide">
                                            <Link href={product.link} target="_blank">
                                                <Image src={product.img} alt="theme-pure" />
                                            </Link>
                                        </SwiperSlide>  
                                    )} 
                                </Swiper>
                                <div className="tp-inner-shop-scrollbar tp-swiper-scrollbar mt-80"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-other" role="tabpanel" aria-labelledby="nav-other-tab" tabIndex="-1">
                            <div className="tp-inner-other-slider">
                                <Swiper {...setting_1} className="tp-inner-other-slider-active swiper-container">
                                    {product_data_3.map((item_3, index) =>
                                        <SwiperSlide key={index} className="tp-inner-item w-img swiper-slide">
                                            <Link href={item_3.link} target="_blank">
                                                <Image src={item_3.img} alt="theme-pure" />
                                            </Link>
                                        </SwiperSlide>                                     
                                    )} 
                                </Swiper>
                                <div className="tp-inner-other-scrollbar tp-swiper-scrollbar mt-80"></div>
                            </div>
                        </div>
                      </div>                          
                </div>
            </div>
        </div>        
    </section>           
        </>
    );
};

export default SwiperTab;