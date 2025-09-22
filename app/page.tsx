import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Adsense from '@/components/Adsense';
import Calculator01 from '@/components/calculators/Calculator01';
import Calculator02 from '@/components/calculators/Calculator02';
import Calculator03 from '@/components/calculators/Calculator03';
import Calculator04 from '@/components/calculators/Calculator04';

export const metadata: Metadata = {
  title: '퍼센트 계산기 - 가장 빠르고 쉬운 온라인 비율 계산기',
  description: '일상의 모든 퍼센트 계산을 위한 가장 빠르고 쉬운 웹 계산기입니다. 숫자만 입력하면 값의 비율, 증감률, 변화값을 즉시 계산해 드립니다. 설치나 버튼 클릭이 필요 없습니다.',
  alternates: {
    canonical: 'https://any-calculator.com',
  },
};

export default function HomePage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'url': 'https://any-calculator.com/',
    'name': '퍼센트 계산기 - 가장 빠르고 쉬운 온라인 비율 계산기',
    'description': '일상의 모든 퍼센트 계산을 위한 가장 빠르고 쉬운 웹 계산기. 숫자만 입력하면 값의 비율, 증감률, 변화값을 즉시 계산.',
    'mainEntity': {
        '@type': 'SoftwareApplication',
        'name': 'Any-Calculator 퍼센트 계산기',
        'applicationCategory': 'BrowserApplication',
        'operatingSystem': 'Any',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'KRW'
        }
    }
  };

  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
              퍼센트 계산기
            </h1>
            <p className="text-center text-gray-500 mt-2">
              버튼 클릭 없이 입력과 동시에 모든 결과를 바로 알려드립니다.
            </p>
          </div>
        </header>

    	<main className="max-w-2xl mx-auto p-4 md:p-8 space-y-8">

          {/* ◀◀ [변경] 상단 광고 위치 */}
          <div className="my-8 text-center">
            <Adsense adSlot="7016137661" /> {/* ◀ 여기에 '상단용' 슬롯 ID를 넣으세요 */}
          </div>

          <Calculator01 />
          <Calculator02 />
          <Calculator03 />
          <Calculator04 />

           {/* ◀◀ [유지] 하단 광고 위치 */}
           <div className="my-8 text-center">
            <Adsense adSlot="4389974328" /> {/* ◀ 여기에 '하단용' 슬롯 ID를 넣으세요 */}
          </div>
        </main>
        
        <footer className="text-center py-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} Any-Calculator. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}
