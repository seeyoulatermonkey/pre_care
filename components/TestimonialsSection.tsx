import type { Testimonial } from "@/data/site";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

const eyebrow = "客户评价";
const title = "把到店体验说得更真实，让第一次预约的人更容易放心";
const intro =
  "把真实感受放在价格和服务之间，让访客在下决定前先看到宠物家长最在意的细节：环境、沟通、手法和洗护后的状态。";

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
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
          {items.map((item, index) => (
            <input
              className="testimonial-input"
              type="radio"
              name="testimonial"
              id={`testimonial-${index + 1}`}
              key={`input-${item.name}-${item.pet}`}
              defaultChecked={index === 0}
            />
          ))}

          <div className="testimonials-stage">
            {items.map((item, index) => (
              <article
                className={`testimonial-panel testimonial-panel-${index + 1}`}
                key={`${item.name}-${item.pet}`}
              >
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
                <label
                  className={`testimonial-dot testimonial-dot-${index + 1}`}
                  htmlFor={`testimonial-${index + 1}`}
                  key={`dot-${item.name}-${index}`}
                  aria-label={`查看第 ${index + 1} 条评价`}
                />
              ))}
            </div>

            <div className="testimonial-actions">
              {items.map((item, index) => {
                const prevIndex = index === 0 ? items.length : index;
                const nextIndex = index === items.length - 1 ? 1 : index + 2;

                return (
                  <div className={`testimonial-nav testimonial-nav-${index + 1}`} key={item.name}>
                    <label className="testimonial-action-button" htmlFor={`testimonial-${prevIndex}`}>
                      {"\u2190 上一条"}
                    </label>
                    <label className="testimonial-action-button" htmlFor={`testimonial-${nextIndex}`}>
                      {"下一条 \u2192"}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
