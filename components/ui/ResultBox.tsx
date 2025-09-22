import React from 'react';
import { Copy } from 'lucide-react';

interface ResultBoxProps {
  label: string;
  value: string;
  color?: 'blue' | 'gray';
  onCopy: () => void;
  isCopied: boolean;
}

const ResultBox: React.FC<ResultBoxProps> = ({ label, value, color = 'blue', onCopy, isCopied }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      label: 'text-blue-700',
      value: 'text-blue-800',
      buttonHover: 'hover:bg-blue-200',
    },
    gray: {
      bg: 'bg-gray-50',
      label: 'text-gray-600',
      value: 'text-gray-700',
      buttonHover: 'hover:bg-gray-200',
    },
  };
  
  const currentTheme = colorClasses[color] || colorClasses.gray;

  // 증감율 계산기(Calculator03)의 동적 색상 처리를 위한 로직
  // value prop에 색상 클래스가 직접 포함되어 올 경우, 해당 클래스를 우선 적용합니다.
  const valueClassName = value.includes('text-red-600') || value.includes('text-blue-600')
    ? ''
    : `font-bold text-3xl ${currentTheme.value}`;

  return (
    <div className={`mt-6 p-4 ${currentTheme.bg} rounded-lg flex justify-between items-center`}>
      <div>
        <p className={`text-sm ${currentTheme.label}`}>{label}</p>
        {/* 증감율 계산기처럼 value 자체에 색상 클래스가 포함된 경우를 처리 */}
        {value.includes('text-red-600') || value.includes('text-blue-600') ? (
            <div className="font-bold text-3xl" dangerouslySetInnerHTML={{ __html: value }} />
        ) : (
            <p className={valueClassName}>{value}</p>
        )}
      </div>
      <button onClick={onCopy} className={`transition-colors p-3 rounded-full ${currentTheme.buttonHover}`}>
        {isCopied ? <span className="text-sm font-semibold">복사됨!</span> : <Copy size={22} />}
      </button>
    </div>
  );
};

export default ResultBox;
