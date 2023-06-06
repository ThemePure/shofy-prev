"use client"

import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="offcanvas__content">
        <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
          <div className="offcanvas__logo logo">
            <Link href="/">
              <img src="/assets/img/logo/logo.svg" alt="logo" />
            </Link>
          </div>
        </div>

        <div className="tp-main-menu-mobile smooth fix mb-40">
          <nav className="tp-main-menu-content">
            <ul>
              <li>
                <a href="#homeDemos">Demos</a>
              </li>
              <li>
                <a href="#shopDemos">Shop</a>
              </li>
              <li>
                <a href="#shopDemos">Pages</a>
              </li>
              <li>
                <a href="#elements">Elements</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
