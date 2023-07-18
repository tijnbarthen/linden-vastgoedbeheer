'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageComponent({ images }: { images: any }) {
  // console.log(images);
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        autoPlay
        interval={5000}
        showThumbs={false}
        dynamicHeight
      >
        {images.map((image: any) => (
          <div className="max-h-[400xp]">
            <img
              className="object-contain"
              alt={`img of ${image.thumbnails.full.url}`}
              src={image.url}
              key={image.id}
              style={{
                objectFit: 'contain',
                maxHeight: '400px',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
