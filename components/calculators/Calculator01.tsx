'use client';
import { useState, useMemo, FC } from 'react';
import { useCalculatorUtils } from '@/hooks/useCalculatorUtils';
import CalculatorCard from '@/components/ui/CalculatorCard';

const Calculator01: FC = () => {
  const [total, setTotal] = useState('');
  const [percent, setPercent] = useState('');
  const { formatNumber, parseNumber } = useCalculatorUtils();

  const result = useMemo(() => parseNumber(total) * (parseNumber(percent) / 100), [total, percent, parseNumber]);

  return (
    <CalculatorCard
      title="전체값에서 일정 비율에 해당하는 값을 계산합니다."
      calculationFormula={<p><b>계산식:</b> {formatNumber(total) || '...'} × ({formatNumber(percent) || '...'} / 100) = <b className="text-gray-700">{formatNumber(result.toString())}</b></p>}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-gray-800">
        <input type="text" value={total} onChange={(e) => setTotal(formatNumber(e.target.value))} placeholder="전체값" className="w-36 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>의</span>
        <input type="text" value={percent} onChange={(e) => setPercent(formatNumber(e.target.value))} placeholder="비율" className="w-20 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>% 는</span>
        <span className="font-bold text-blue-600 text-xl p-2">{formatNumber(result.toString())}</span>
        <span>입니다.</span>
      </div>
    </CalculatorCard>
  );
};
export default Calculator01;
