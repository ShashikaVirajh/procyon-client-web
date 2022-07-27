import { FC } from 'react';

import BarChart from 'components/charts/bar-chart/bar-chart.component';
import { Header } from 'components/layouts';
import { MonthlyApplication } from 'store/stats/types/stats-state.types';

import Wrapper from './monthly-stats-chart.styles';

const ChartsContainer: FC<Props> = ({ data }) => (
  <Wrapper>
    <Header className='header' level={4} text='Monthly Applications' />
    <BarChart data={data} />
  </Wrapper>
);

type Props = {
  data: MonthlyApplication[];
};

export default ChartsContainer;
