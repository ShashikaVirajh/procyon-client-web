import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { TLinkItem } from './link-list';

const Link: FC<LinkProps> = ({ linkItem, onClick }) => {
  const { id, text, path, icon } = linkItem;

  const setClassNames = (isLinkActive: boolean): string => {
    return isLinkActive ? 'nav-link active' : 'nav-link';
  };

  return (
    <NavLink
      key={id}
      to={path}
      className={({ isActive }): any => setClassNames(isActive)}
      onClick={onClick}
    >
      <span className='icon'>{icon}</span>
      {text}
    </NavLink>
  );
};

type LinkProps = {
  linkItem: TLinkItem;
  onClick?: () => void;
};

export default Link;
