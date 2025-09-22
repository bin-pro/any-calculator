import React from 'react';

interface CalculatorCardProps {
  title: string;
  children: React.ReactNode; // This should be React.ReactNode
  resultDisplay?: React.ReactNode;
  calculationFormula: React.ReactNode;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, children, resultDisplay, calculationFormula }) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      {/* 제목 스타일을 더 부드럽게 변경 */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      
      <div className="space-y-4">
        {children}
      </div>
      
      {resultDisplay}
      
      <div className="mt-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
        {calculationFormula}
      </div>
    </section>
  );
};

export default CalculatorCard;

