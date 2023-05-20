import React from 'react';
import Image from 'next/image';
import logoLight from '../../public/images/logo-light.png';
import banner from '../../public/images/banner.png';

const HomeHeader = () => {
  return (
    <div className='py-2'>
        <div className="container-fluid">
            <div id="homeCardCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#homeCardCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homeCardCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner rounded-3">
                    <div className='carousel-item active'>
                        <div className="row align-items-center bg-light text-dark">
                            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                                <h1 className="display-4 fw-bold lh-1">We present to you</h1>
                                <p className="lead">With latest noise cancelling, and our AI-driven technology. Our latest creation, SoundWave's Cascade Headphones.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                    <button type="button" className="btn btn-outline-primary px-4 me-md-2">Shop Now</button>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 p-0 pb-3 overflow-hidden">
                                <Image className="rounded-lg-3 img-fluid" src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="row align-items-center bg-primary text-light">
                            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                                <h1 className="display-4 fw-bold lh-1">The Speakerrrr Fest is here!</h1>
                                <p className="lead">India's largest headphone and speaker sale organised by us! Come join us on 23rd June 2023</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                    <button type="button" className="btn btn-outline-light px-4 me-md-2">Learn More</button>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 p-0 pb-3 overflow-hidden">
                                <Image className="rounded-lg-3 img-fluid" src={logoLight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomeHeader;