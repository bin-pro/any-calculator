import type { Metadata } from "next";
// 'next/font/google' 대신 Pretendard 폰트 설정을 가져옵니다.
import { Pretendard } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "퍼센트 계산기 - 가장 빠르고 쉬운 온라인 비율 계산기",
  description: "일상의 모든 퍼센트 계산을 위한 가장 빠르고 쉬운 웹 계산기입니다. 숫자만 입력하면 값의 비율, 증감률, 변화값을 즉시 계산해 드립니다. 설치나 버튼 클릭이 필요 없습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // html lang을 'ko'로 변경하고, Pretendard 폰트 변수를 적용합니다.
    <html lang="ko">
      <body className={`${Pretendard.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
