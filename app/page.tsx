import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PricingSection } from "@/components/PricingSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import {
  carouselSlides,
  heroMetrics,
  pricingPlans,
  serviceCards,
  testimonials
} from "@/data/site";

const eyebrow = "\u6e29\u67d4\u6d17\u62a4 \u00b7 \u9ad8\u7aef\u73af\u5883 \u00b7 \u900f\u660e\u62a5\u4ef7";
const titleLine1 = "\u628a\u6d17\u6fa1\u53d8\u6210";
const titleLine2 = "\u6bdb\u5b69\u5b50\u671f\u5f85\u7684\u653e\u677e\u65f6\u523b";
const heroText =
  "\u4ece\u57fa\u7840\u51c0\u6d17\u5230\u7cbe\u81f4\u7f8e\u5bb9\uff0c\u6211\u4eec\u628a\u8212\u9002\u3001\u6d01\u51c0\u548c\u95e8\u5e97\u6c1b\u56f4\u90fd\u505a\u5f97\u66f4\u5b8c\u6574\u3002\u73b0\u5728\u9996\u9875\u9996\u5c4f\u5df2\u7ecf\u6362\u6210\u771f\u5b9e\u95e8\u5e97\u98ce\u683c\u8f6e\u64ad\uff0c\u66f4\u9002\u5408\u76f4\u63a5\u62ff\u6765\u505a\u5b98\u7f51\u5c55\u793a\u3002";
const primaryCta = "\u9884\u7ea6\u9996\u6b21\u4f53\u9a8c";
const secondaryCta = "\u67e5\u770b\u6d17\u62a4\u5957\u9910";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">{eyebrow}</span>
            <h1>
              {titleLine1}
              <br />
              {titleLine2}
            </h1>
            <p>{heroText}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {primaryCta}
              </a>
              <a className="button button-secondary" href="#pricing">
                {secondaryCta}
              </a>
            </div>
            <div className="hero-metrics">
              {heroMetrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <HeroCarousel slides={carouselSlides} />
          </div>
        </section>

        <ServicesSection items={serviceCards} />
        <PricingSection items={pricingPlans} />
        <TestimonialsSection items={testimonials} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
