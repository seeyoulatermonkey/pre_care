const eyebrow = "\u9884\u7ea6\u5230\u5e97";
const title = "\u6b22\u8fce\u5e26\u6bdb\u5b69\u5b50\u6765\u5750\u5750";
const intro =
  "\u5982\u679c\u4f60\u9700\u8981\uff0c\u6211\u4e0b\u4e00\u6b65\u53ef\u4ee5\u7ee7\u7eed\u5e2e\u4f60\u628a\u8fd9\u4e2a\u9875\u9762\u63a5\u6210\u771f\u6b63\u53ef\u63d0\u4ea4\u7684\u9884\u7ea6\u8868\u5355\uff0c\u6216\u8005\u7ee7\u7eed\u66ff\u6362\u6210\u4f60\u7684\u5e97\u540d\u3001\u5730\u5740\u3001\u7535\u8bdd\u548c\u771f\u5b9e\u95e8\u5e97\u56fe\u3002";
const callCta = "\u7535\u8bdd\u54a8\u8be2";
const infoEyebrow = "\u95e8\u5e97\u4fe1\u606f";
const infoTitle = "\u9ad8\u7aef\u6d17\u62a4\u7a7a\u95f4\u5c55\u793a\u6837\u677f";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="section-wrap contact-grid">
        <article className="contact-card">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{intro}</p>
          <a className="button button-primary" href="tel:4008882026">
            {callCta}
          </a>
        </article>

        <article className="contact-card info">
          <span className="eyebrow">{infoEyebrow}</span>
          <h2>{infoTitle}</h2>
          <ul className="contact-list">
            <li>
              <strong>{"\u8425\u4e1a\u65f6\u95f4\uff1a"}</strong>
              {"\u5468\u4e00\u81f3\u5468\u65e5 10:00 - 21:00"}
            </li>
            <li>
              <strong>{"\u95e8\u5e97\u5730\u5740\uff1a"}</strong>
              {"XX \u5e02 XX \u533a XX \u8def 18 \u53f7 1 \u5c42"}
            </li>
            <li>
              <strong>{"\u9884\u7ea6\u7535\u8bdd\uff1a"}</strong>
              {"400-888-2026"}
            </li>
            <li>
              <strong>{"\u9996\u6b21\u798f\u5229\uff1a"}</strong>
              {"\u65b0\u5ba2\u6d17\u62a4\u7acb\u51cf 30 \u5143"}
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
