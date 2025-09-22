'use client';
import { useState, useMemo, FC } from 'react';
import { useCalculatorUtils } from '@/hooks/useCalculatorUtils';
import CalculatorCard from '@/components/ui/CalculatorCard';

const Calculator02: FC = () => {
  const [total, setTotal] = useState('');
  const [partial, setPartial] = useState('');
  const { formatNumber, parseNumber } = useCalculatorUtils();

  const result = useMemo(() => {
    const totalNum = parseNumber(total);
    return totalNum === 0 ? 0 : (parseNumber(partial) / totalNum) * 100;
  }, [total, partial, parseNumber]);

  return (
    <CalculatorCard
      title="전체값에서 일부값이 차지하는 비율을 계산합니다."
      calculationFormula={<p><b>계산식:</b> ({formatNumber(partial) || '...'} / {formatNumber(total) || '...'}) × 100 = <b className="text-gray-700">{formatNumber(result.toFixed(2))}%</b></p>}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-gray-800">
        <input type="text" value={total} onChange={(e) => setTotal(formatNumber(e.target.value))} placeholder="전체값" className="w-36 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>에서</span>
        <input type="text" value={partial} onChange={(e) => setPartial(formatNumber(e.target.value))} placeholder="일부값" className="w-32 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>은(는)</span>
        <span className="font-bold text-blue-600 text-xl p-2">{formatNumber(result.toFixed(2))}%</span>
        <span>입니다.</span>
      </div>
    </CalculatorCard>
  );
};
export default Calculator02;
