import Image from "next/image";
import type { CarouselSlide } from "@/data/site";

type HeroCarouselProps = {
  slides: CarouselSlide[];
};

const banner = "门店实景风格提案";
const giftTitle = "新客到店礼";
const giftText = "首次洗护立减 30 元，附赠指甲修剪与耳道基础清洁。";

export function HeroCarousel({ slides }: HeroCarouselProps) {
  return (
    <div className="hero-carousel hero-carousel-static">
      {slides.map((slide, index) => (
        <input
          className="hero-carousel-input"
          type="radio"
          name="hero-slide"
          id={`hero-slide-${index + 1}`}
          key={`hero-input-${slide.title}`}
          defaultChecked={index === 0}
        />
      ))}

      <div className="hero-carousel-track">
        {slides.map((slide, index) => (
          <article
            className={`hero-carousel-panel hero-carousel-panel-${index + 1}`}
            key={slide.title}
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
      </div>

      <div className="carousel-top">
        <span className="pill">{banner}</span>
        <div className="promo-card">
          <strong>{giftTitle}</strong>
          {giftText}
        </div>
      </div>

      <div className="carousel-bottom">
        <div className="hero-caption-stack">
          {slides.map((slide, index) => (
            <div
              className={`carousel-caption hero-caption hero-caption-${index + 1}`}
              key={`caption-${slide.title}`}
            >
              <strong>{slide.title}</strong>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <div className="carousel-dots">
            {slides.map((slide, index) => (
              <label
                className={`carousel-dot hero-dot-${index + 1}`}
                htmlFor={`hero-slide-${index + 1}`}
                key={`dot-${slide.title}`}
                aria-label={`第 ${index + 1} 张`}
              />
            ))}
          </div>

          <div className="hero-nav-stack">
            {slides.map((slide, index) => {
              const prevIndex = index === 0 ? slides.length : index;
              const nextIndex = index === slides.length - 1 ? 1 : index + 2;

              return (
                <div className={`hero-nav hero-nav-${index + 1}`} key={`nav-${slide.title}`}>
                  <label className="carousel-arrow" htmlFor={`hero-slide-${prevIndex}`}>
                    {"\u2190"}
                  </label>
                  <label className="carousel-arrow" htmlFor={`hero-slide-${nextIndex}`}>
                    {"\u2192"}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
