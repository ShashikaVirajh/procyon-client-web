import { FC } from 'react';
import { useSelector } from 'react-redux';

import { StatsCard } from 'components/stats';
import { selectApplicationCount } from 'store/stats/stats.selector';

import Wrapper from './stats-container.styles';
import { APPLICATION_COUNT_LIST, StatItem } from './application-count-list';

const StatsContainer: FC = () => {
  const applicationCount = useSelector(selectApplicationCount);

  const statsList = applicationCount
    ? APPLICATION_COUNT_LIST(applicationCount)
    : APPLICATION_COUNT_LIST();

  const renderStats = (): JSX.Element[] => {
    return statsList.map((stat: StatItem, index: number) => {
      return <StatsCard key={index} {...stat} />;
    });
  };

  return <Wrapper>{renderStats()}</Wrapper>;
};

export default StatsContainer;
