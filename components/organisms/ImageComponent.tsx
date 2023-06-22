'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageComponent({ images }: { images: any }) {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        autoPlay
        interval={5000}
        showThumbs={false}
      >
        {images.map((image: any) => (
          <div>
            <img
              className="w-full"
              alt="img of a girl posing"
              src={image.url}
              key={image.id}
              style={{
                maxHeight: '500px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
