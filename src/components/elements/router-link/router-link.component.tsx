import { FC } from 'react';
import { Link } from 'react-router-dom';

const RouterLink: FC<RouterLinkProps> = ({ className, route, text }) => {
  return (
    <Link to={route} className={className}>
      {text}
    </Link>
  );
};

type RouterLinkProps = {
  route: string;
  text: string;
  className?: string;
};

export default RouterLink;
