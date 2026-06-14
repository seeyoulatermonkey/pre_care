"use client";

const brand = "\u7ed2\u7ed2\u6fa1\u5802\u5ba0\u7269\u6d17\u62a4\u5e97";
const note = "\u5f53\u524d\u7248\u672c\u5df2\u8fc1\u79fb\u4e3a Next.js \u9759\u6001\u7ad9\u70b9";

export function Footer() {
  return (
    <footer className="footer">
      <span>
        {"\u00a9"} {new Date().getFullYear()} {brand}
      </span>
      <span>{note}</span>
    </footer>
  );
}
