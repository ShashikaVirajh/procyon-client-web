import { FC } from 'react';

const Header: FC<HeaderProps> = ({ level = 1, className, text }) => {
  const Tag: HeaderTag = `h${level}`;

  return <Tag className={className}>{text}</Tag>;
};

export type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeaderProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export default Header;
