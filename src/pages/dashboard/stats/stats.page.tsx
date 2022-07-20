import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchStatsRequest } from 'store/stats/stats.actions';
import { StatsContainer } from 'components/stats';
import { selectMonthlyApplications } from 'store/stats/stats.selector';

import ChartsContainer from 'components/charts/chart-container/chart-container.component';

const Stats: FC = () => {
  const dispatch = useDispatch();

  const monthlyApplications = useSelector(selectMonthlyApplications);

  useEffect(() => {
    dispatch(fetchStatsRequest());
  }, [dispatch]);

  return (
    <>
      <StatsContainer />
      <ChartsContainer data={monthlyApplications} />
    </>
  );
};

export default Stats;
