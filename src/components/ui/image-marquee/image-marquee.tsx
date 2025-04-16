import React from 'react';
import css from './image-marquee.module.scss';

type ImageMarqueeProps = {
  images: { img: string; webp: string; alt: string }[];
};

export default function ImageMarquee({ images }: ImageMarqueeProps) {
  return (
    <div className={css.container}>
      <div className={css.marquee}>
        {images.map((image) => (
          <img
            srcSet={image.webp}
            src={image.img}
            loading="lazy"
            alt={image.alt}
            key={Math.random()}
          />
        ))}
      </div>
      <div className={css.marquee}>
        {images.map((image) => (
          <img src={image.img} alt={image.alt} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
