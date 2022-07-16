import { FC } from 'react';

import { LINK_ITEMS, TLinkItem } from './link-list';
import Link from './link.component';

const NavigationLinks: FC<Props> = ({ onClick }) => {
  return (
    <div className='nav-links'>
      {LINK_ITEMS.map((linkItem: TLinkItem) => {
        return <Link key={linkItem.id} linkItem={linkItem} onClick={onClick} />;
      })}
    </div>
  );
};

type Props = {
  onClick?: () => void;
};

export default NavigationLinks;
