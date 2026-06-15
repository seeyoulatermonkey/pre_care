"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/data/site";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

const eyebrow = "客户评价";
const title = "把到店体验说得更真实，让第一次预约的人更容易放心";
const intro =
  "我们把真实感受放在价格和服务之间，让访客在下决定前先看到宠物家长最在意的细节：环境、沟通、手法和洗护后的状态。";
const prevLabel = "查看上一条评价";
const nextLabel = "查看下一条评价";

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % items.length);
    }, 3800);

    return () => window.clearInterval(timerId);
  }, [items.length]);

  return (
    <section id="testimonials">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </div>

        <div className="testimonials-shell">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => (
              <article className="testimonial-card" key={`${item.name}-${item.pet}`}>
                <span className="testimonial-highlight">{item.highlight}</span>
                <p className="testimonial-quote">“{item.quote}”</p>
                <div className="testimonial-meta">
                  <strong>{item.name}</strong>
                  <span>{item.pet}</span>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonial-controls">
            <div className="testimonial-dots" aria-label="评价分页">
              {items.map((item, index) => (
                <button
                  className={`testimonial-dot${index === currentIndex ? " active" : ""}`}
                  type="button"
                  key={`${item.name}-${index}`}
                  aria-label={`查看第 ${index + 1} 条评价`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <div className="testimonial-arrows">
              <button
                className="testimonial-arrow"
                type="button"
                aria-label={prevLabel}
                onClick={() =>
                  setCurrentIndex((current) => (current - 1 + items.length) % items.length)
                }
              >
                {"\u2190"}
              </button>
              <button
                className="testimonial-arrow"
                type="button"
                aria-label={nextLabel}
                onClick={() => setCurrentIndex((current) => (current + 1) % items.length)}
              >
                {"\u2192"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
