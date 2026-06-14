"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CarouselSlide } from "@/data/site";

type HeroCarouselProps = {
  slides: CarouselSlide[];
};

const banner = "\u95e8\u5e97\u5b9e\u666f\u98ce\u683c\u63d0\u6848";
const giftTitle = "\u65b0\u5ba2\u5230\u5e97\u793c";
const giftText =
  "\u9996\u6b21\u6d17\u62a4\u7acb\u51cf 30 \u5143\uff0c\u9644\u8d60\u6307\u7532\u4fee\u526a\u4e0e\u8033\u9053\u57fa\u7840\u6e05\u6d01\u3002";
const prevLabel = "\u4e0a\u4e00\u5f20";
const nextLabel = "\u4e0b\u4e00\u5f20";

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timerId);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <article
          className={`carousel-slide${index === currentSlide ? " active" : ""}`}
          key={slide.title}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        </article>
      ))}

      <div className="carousel-top">
        <span className="pill">{banner}</span>
        <div className="promo-card">
          <strong>{giftTitle}</strong>
          {giftText}
        </div>
      </div>

      <div className="carousel-bottom">
        <div className="carousel-caption">
          <strong>{activeSlide.title}</strong>
          <p>{activeSlide.description}</p>
        </div>
        <div className="carousel-nav">
          <button
            className="carousel-arrow"
            type="button"
            aria-label={prevLabel}
            onClick={() =>
              setCurrentSlide((current) => (current - 1 + slides.length) % slides.length)
            }
          >
            {"\u2190"}
          </button>
          <div className="carousel-dots">
            {slides.map((slide, index) => (
              <button
                className={`carousel-dot${index === currentSlide ? " active" : ""}`}
                type="button"
                key={slide.title}
                aria-label={`\u7b2c ${index + 1} \u5f20`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button
            className="carousel-arrow"
            type="button"
            aria-label={nextLabel}
            onClick={() => setCurrentSlide((current) => (current + 1) % slides.length)}
          >
            {"\u2192"}
          </button>
        </div>
      </div>
    </div>
  );
}
