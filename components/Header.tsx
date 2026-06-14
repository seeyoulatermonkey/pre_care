"use client";

import { useState } from "react";

const navItems = [
  { href: "#services", label: "\u670d\u52a1\u9879\u76ee" },
  { href: "#pricing", label: "\u5957\u9910\u4ef7\u683c" },
  { href: "#contact", label: "\u9884\u7ea6\u5230\u5e97" }
];

const brand = "\u7ed2\u7ed2\u6fa1\u5802";
const navLabel = "\u4e3b\u5bfc\u822a";
const menuLabel = "\u5207\u6362\u5bfc\u822a\u83dc\u5355";
const cta = "\u7acb\u5373\u9884\u7ea6";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="topbar">
      <nav className="nav" aria-label={navLabel}>
        <a className="brand" href="#home">
          <span className="brand-badge" aria-hidden="true">
            {"\u5ba0"}
          </span>
          <span>{brand}</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="navLinks"
          aria-label={menuLabel}
          onClick={() => setIsOpen((open) => !open)}
        >
          {"\u2630"}
        </button>

        <div className={`nav-links${isOpen ? " open" : ""}`} id="navLinks">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          {cta}
        </a>
      </nav>
    </header>
  );
}
