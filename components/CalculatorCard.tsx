import React from 'react';

interface CalculatorCardProps {
  title: string;
  children: React.ReactNode;
  resultDisplay: React.ReactNode;
  calculationFormula: React.ReactNode;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, children, resultDisplay, calculationFormula }) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">{title}</h2>
      
      {/* 고유한 입력창 영역 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        {children}
      </div>
      
      {/* 결과 표시 영역 */}
      {resultDisplay}
      
      {/* 계산식 설명 영역 */}
      <div className="mt-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
        {calculationFormula}
      </div>
    </section>
  );
};

export default CalculatorCard;
