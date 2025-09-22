'use client';
import { useState, useMemo, FC } from 'react';
import { useCalculatorUtils } from '@/hooks/useCalculatorUtils';
import CalculatorCard from '@/components/ui/CalculatorCard';

const Calculator03: FC = () => {
  const [base, setBase] = useState('');
  const [changed, setChanged] = useState('');
  const { formatNumber, parseNumber } = useCalculatorUtils();

  const resultData = useMemo(() => {
    const baseNum = parseNumber(base);
    const changedNum = parseNumber(changed);
    if (baseNum === 0) return { value: 0, status: '변화 없음', color: 'text-gray-700' };
    const change = ((changedNum - baseNum) / baseNum) * 100;
    const status = change > 0 ? '증가' : change < 0 ? '감소' : '변화 없음';
    const color = change > 0 ? 'text-red-600' : change < 0 ? 'text-blue-600' : 'text-gray-700';
    return { value: parseFloat(change.toFixed(2)), status, color };
  }, [base, changed, parseNumber]);

  return (
    <CalculatorCard
      title="값이 변경되었을 때 증감률을 계산합니다."
      calculationFormula={<p><b>계산식:</b> (({formatNumber(changed) || '...'} - {formatNumber(base) || '...'}) / {formatNumber(base) || '...'}) × 100 = <b className="text-gray-700">{resultData.value}%</b></p>}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-gray-800">
        <input type="text" value={base} onChange={(e) => setBase(formatNumber(e.target.value))} placeholder="기준값" className="w-36 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>이(가)</span>
        <input type="text" value={changed} onChange={(e) => setChanged(formatNumber(e.target.value))} placeholder="변화값" className="w-36 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>(으)로 바뀌면</span>
        <span className={`font-bold text-xl p-2 ${resultData.color}`}>{formatNumber(Math.abs(resultData.value).toString())}% {resultData.status}</span>
      </div>
    </CalculatorCard>
  );
};
export default Calculator03;
