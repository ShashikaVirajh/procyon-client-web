import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchStatsRequest } from 'store/stats/stats.actions';
import { StatsContainer } from 'components/stats';
import { selectMonthlyApplications } from 'store/stats/stats.selector';

import MonthlyStatsChart from 'components/stats/monthly-stats-chart/monthly-stats-chart.component';

const Stats: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatsRequest());
  }, [dispatch]);

  const monthlyApplications = useSelector(selectMonthlyApplications);

  return (
    <>
      <StatsContainer />
      <MonthlyStatsChart data={monthlyApplications} />
    </>
  );
};

export default Stats;
