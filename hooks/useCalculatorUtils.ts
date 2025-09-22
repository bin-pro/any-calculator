import { useState } from 'react';

export const useCalculatorUtils = () => {
  const [copied, setCopied] = useState(false);

  // G-02: 입력값을 세 자리마다 콤마가 있는 문자열로 변환
  const formatNumber = (value: string): string => {
    const num = value.replace(/,/g, '');
    if (num === '' || isNaN(Number(num))) return '';
    return new Intl.NumberFormat('ko-KR').format(Number(num));
  };

  // 콤마가 있는 문자열을 실제 숫자로 변환
  const parseNumber = (value: string): number => {
    return parseFloat(value.replace(/,/g, '')) || 0;
  };
  
  // G-03: 클립보드 복사 기능
  const copyToClipboard = (text: string) => {
    if (!text || text === '0') return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return { copied, formatNumber, parseNumber, copyToClipboard };
};
