import { COLORS } from 'constants/colors.constants';
import { FC } from 'react';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { MonthlyApplication } from 'store/stats/types/stats-state.types';

const BarChartComponent: FC<BarChartComponentProps> = ({
  data,
  barSize,
  height,
  color,
  allowDecimals,
}) => (
  <ResponsiveContainer width='100%' height={height}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray='10 10 ' />
      <XAxis dataKey='month' />
      <YAxis allowDecimals={allowDecimals} />
      <Tooltip />
      <Bar dataKey='count' fill={color} barSize={barSize} />
    </BarChart>
  </ResponsiveContainer>
);

type BarChartComponentProps = {
  data: MonthlyApplication[];
  color?: string;
  height?: number;
  barSize?: number;
  allowDecimals?: boolean;
};

BarChartComponent.defaultProps = {
  color: COLORS.DARK_BLUE,
  height: 300,
  barSize: 75,
  allowDecimals: false,
};

export default BarChartComponent;
