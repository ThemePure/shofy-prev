import React, { useState, useEffect } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      {/* <!-- Scroll-top --> */}
      {/* <button
        onClick={scrollTop}
        className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}
        data-target="html"
      >
         <i className="far fa-angle-double-up"></i>
      </button> */}

      <div className={`back-to-top-wrapper ${sticky ? "back-to-top-btn-show" : ""}`}>
              <button onClick={scrollTop} id="back_to_top" type="button" className="back-to-top-btn">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>               
              </button>
          </div>
       
      {/* <!-- Scroll-top-end--> */}
    </>
  );
};

export default ScrollToTop;
