import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleInfo, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../public/images/logo.svg';
import { motion } from 'framer-motion';
import { faBehance, faFacebook, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-dark bg-primary m-2 rounded">
      <div className="container">
        <FontAwesomeIcon
            type="button" data-bs-toggle="offcanvas" data-bs-target="#infoOC"
            aria-controls="infoOC"
            icon={faCircleInfo}
          />
        <div className="offcanvas offcanvas-start text-bg-primary" tabindex="-1" id="infoOC"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title" id="offcanvasNavbarLabel"><span className='fw-bolder'>Sound</span><span className='fw-lighter'>Wave</span></h3>
            <FontAwesomeIcon type='button' icon={faTimes} className='text-light' data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item fw-light">
                SoundWave is a new era music studio. We provide various services ranging from audio editing to music production.
              </li>
              <hr className='nav-item' />
              <li className='nav-item'>
                <span>Social Links</span>
                <br />
                <span className='mt-2 d-flex align-items-center justify-content-start'>
                  <a className='me-auto' href='/'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a className='me-auto' href='/'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a className='me-auto' href='/'>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className='me-auto' href='/'>
                    <FontAwesomeIcon icon={faBehance} />
                  </a>
                  <a className='me-auto' href='/'>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </span>
              </li>
              <hr className='nav-item' />
              <li className='nav-item fw-lighter opacity-50 text-center'>
                SoundWave
                <br />
                <span>Rights Reserved &copy; 2023</span>
              </li>
            </ul>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 0.9 }}
          whileHover={{ opacity: 1, scale: 0.8 }}
          transition={{
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 50,
              restDelta: 0.001
            }
          }}
          >
          <a className="navbar-brand" href="#">
            {/* <span className='fw-bolder h4'>Sound</span><span className='fw-lighter h4'>Wave</span> */}
            <Image src={logo} width={48} height={48} alt='SoundWave' />
          </a>
        </motion.div>
          <FontAwesomeIcon
            type="button" data-bs-toggle="offcanvas" data-bs-target="#menuSW"
            aria-controls="menuSW"
            icon={faBars}
          />
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="menuSW"
          aria-labelledby="menuSWLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="menuSWLabel">Menu</h5>
            <FontAwesomeIcon type='button' icon={faTimes} className='text-light' data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className={router.pathname == '/' ? 'active nav-link' : 'nav-link'} href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == '/about-us' ? 'active nav-link' : 'nav-link'} href="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == '/products-and-services' ? 'active nav-link' : 'nav-link'} href="/products-and-services">Products and Services</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == '/lets-talk' ? 'active nav-link' : 'nav-link'} href="/lets-talk">Let's Talk</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;