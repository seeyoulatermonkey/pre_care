import type { PricingPlan } from "@/data/site";

type PricingSectionProps = {
  items: PricingPlan[];
};

const eyebrow = "\u53c2\u8003\u4ef7\u683c";
const title = "\u628a\u4ef7\u683c\u8bf4\u6e05\u695a\uff0c\u4e5f\u628a\u670d\u52a1\u5185\u5bb9\u5199\u6e05\u695a";
const intro =
  "\u4e0b\u9762\u662f\u53ef\u76f4\u63a5\u5c55\u793a\u7684\u95e8\u5e97\u5957\u9910\u533a\u5757\uff0c\u540e\u9762\u4f60\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u66ff\u6362\u6210\u81ea\u5df1\u7684\u771f\u5b9e\u4ef7\u683c\u548c\u4f53\u91cd\u5206\u6863\u3002";

export function PricingSection({ items }: PricingSectionProps) {
  return (
    <section id="pricing">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </div>

        <div className="pricing">
          {items.map((item) => (
            <article
              className={`price-card${item.featured ? " featured" : ""}`}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <div className="price-value">{item.price}</div>
              <p>{item.description}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button button-secondary" href="#contact">
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
