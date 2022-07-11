import { FC } from 'react';
import { Header } from 'components/elements';

import Wrapper from './stats-card.styles';

const StatsCard: FC<StatsCardProps> = ({ count, title, icon, color, backgroundColor }) => {
  return (
    <Wrapper color={color} backgroundColor={backgroundColor}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>

      <Header level={5} text={title} />
    </Wrapper>
  );
};

type StatsCardProps = {
  count: number;
  title: string;
  icon: JSX.Element;
  color: string;
  backgroundColor: string;
};

export default StatsCard;
