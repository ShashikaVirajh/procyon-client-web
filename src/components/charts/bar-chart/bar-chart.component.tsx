import { COLORS } from 'constants/colors.constants';
import { FC } from 'react';

import {
  Bar,
  BarChart as BarChartComponent,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { MonthlyApplication } from 'store/stats/stats-store.types';

const BarChart: FC<BarChartProps> = ({ data, barSize, height, color, allowDecimals }) => (
  <ResponsiveContainer width='100%' height={height}>
    <BarChartComponent data={data}>
      <CartesianGrid strokeDasharray='10 10 ' />
      <XAxis dataKey='month' />
      <YAxis allowDecimals={allowDecimals} />
      <Tooltip />
      <Bar dataKey='count' fill={color} barSize={barSize} />
    </BarChartComponent>
  </ResponsiveContainer>
);

type BarChartProps = {
  data: MonthlyApplication[];
  color?: string;
  height?: number;
  barSize?: number;
  allowDecimals?: boolean;
};

BarChart.defaultProps = {
  color: COLORS.DARK_BLUE,
  height: 300,
  barSize: 75,
  allowDecimals: false,
};

export default BarChart;
