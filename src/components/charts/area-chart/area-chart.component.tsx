import { COLORS } from 'constants/colors.constants';
import { FC } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { MonthlyApplication } from 'store/stats/types/stats-state.types';

const AreaChartComponent: FC<AreaChartComponentProps> = ({ data, height, color }) => {
  return (
    <ResponsiveContainer width='100%' height={height}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type='monotone' dataKey='count' stroke='#1e3a8a' fill={color} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

type AreaChartComponentProps = {
  data: MonthlyApplication[];
  color?: string;
  height?: number;
};

AreaChartComponent.defaultProps = {
  color: COLORS.DARK_BLUE,
  height: 300,
};

export default AreaChartComponent;
