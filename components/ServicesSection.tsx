import type { ServiceCard } from "@/data/site";

type ServicesSectionProps = {
  items: ServiceCard[];
};

const eyebrow = "\u6838\u5fc3\u670d\u52a1";
const title =
  "\u8ba9\u4e0d\u540c\u4f53\u578b\u3001\u6bdb\u8d28\u548c\u6027\u683c\u7684\u5ba0\u7269\u90fd\u80fd\u5f97\u5230\u66f4\u5408\u9002\u7684\u62a4\u7406";
const intro =
  "\u9875\u9762\u4fdd\u7559\u4e86\u5b98\u7f51\u9700\u8981\u7684\u5b8c\u6574\u7ed3\u6784\uff0c\u540c\u65f6\u9996\u5c4f\u6539\u6210\u66f4\u771f\u5b9e\u7684\u9ad8\u7aef\u5ba0\u7269\u6d17\u62a4\u5e97\u73af\u5883\uff0c\u6574\u4f53\u89c2\u611f\u4f1a\u6bd4\u63d2\u753b\u66f4\u8d34\u8fd1\u95e8\u5e97\u7ecf\u8425\u3002";

export function ServicesSection({ items }: ServicesSectionProps) {
  return (
    <section id="services">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </div>

        <div className="services">
          {items.map((item) => (
            <article className="service-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
