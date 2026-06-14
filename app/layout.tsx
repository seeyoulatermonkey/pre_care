import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "\u7ed2\u7ed2\u6fa1\u5802 | \u5ba0\u7269\u6d17\u62a4\u5e97",
  description:
    "\u9ad8\u7aef\u5ba0\u7269\u6d17\u62a4\u95e8\u5e97\u5355\u9875\u7f51\u7ad9\uff0c\u5305\u542b\u5e97\u5185\u5b9e\u666f\u8f6e\u64ad\u3001\u670d\u52a1\u9879\u76ee\u3001\u4ef7\u683c\u5957\u9910\u4e0e\u9884\u7ea6\u4fe1\u606f\u3002"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
