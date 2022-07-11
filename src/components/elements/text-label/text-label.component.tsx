import { FC } from 'react';

const Text: FC<TextProps> = ({ className, label, onClick, ...props }) => {
  return (
    <label className={className} onClick={onClick} {...props}>
      {label}
    </label>
  );
};

type TextProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

export default Text;
