'use client';
import { useState, useMemo, FC } from 'react';
import { useCalculatorUtils } from '@/hooks/useCalculatorUtils';
import CalculatorCard from '@/components/ui/CalculatorCard';

const Calculator04: FC = () => {
  const [base, setBase] = useState('');
  const [percent, setPercent] = useState('');
  const [type, setType] = useState<'increase' | 'decrease'>('increase');
  const { formatNumber, parseNumber } = useCalculatorUtils();

  const result = useMemo(() => {
    const baseNum = parseNumber(base);
    const percentNum = parseNumber(percent);
    if (type === 'increase') return baseNum * (1 + percentNum / 100);
    return baseNum * (1 - percentNum / 100);
  }, [base, percent, type, parseNumber]);

  return (
    <CalculatorCard
      title="기준값에서 일정 비율만큼 증가/감소된 값을 계산합니다."
      calculationFormula={<p><b>계산식:</b> {formatNumber(base) || '...'} × (1 {type === 'increase' ? '+' : '-'} ({formatNumber(percent) || '...'} / 100)) = <b className="text-gray-700">{formatNumber(result.toString())}</b></p>}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-gray-800">
        <input type="text" value={base} onChange={(e) => setBase(formatNumber(e.target.value))} placeholder="기준값" className="w-36 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>의</span>
        <input type="text" value={percent} onChange={(e) => setPercent(formatNumber(e.target.value))} placeholder="비율" className="w-20 p-2 bg-white border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"/>
        <span>%</span>
        <select value={type} onChange={(e) => setType(e.target.value as 'increase' | 'decrease')} className="p-2 bg-white border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
          <option value="increase">증가</option>
          <option value="decrease">감소</option>
        </select>
        <span>하면</span>
        <span className="font-bold text-blue-600 text-xl p-2">{formatNumber(result.toString())}</span>
        <span>입니다.</span>
      </div>
    </CalculatorCard>
  );
};
export default Calculator04;
