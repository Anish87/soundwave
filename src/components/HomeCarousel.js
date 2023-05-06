import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <div className='p-2 bg-dark'>
        <Carousel className='bg-dark'>
            <Carousel.Item>
                <img
                className="d-flex rounded-3 img-fluid"
                src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-flex rounded-3 img-fluid" 
                src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg"
                alt="Second slide"
                />

                <Carousel.Caption>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-flex rounded-3 img-fluid"
                src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default HomeCarousel;
