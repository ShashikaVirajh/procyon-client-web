import { FC } from 'react';

import BarChart from 'components/charts/bar-chart/bar-chart.component';
import { Header } from 'components/elements';
import { MonthlyApplication } from 'store/stats/types/stats-state.types';

import Wrapper from './chart-container.styles';

const ChartsContainer: FC<ChartsContainerProps> = ({ data }) => (
  <Wrapper>
    <Header className='header' level={4} text='Monthly Applications' />
    <BarChart data={data} />
  </Wrapper>
);

type ChartsContainerProps = {
  data: MonthlyApplication[];
};

export default ChartsContainer;
