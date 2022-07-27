import { FC } from 'react';

import { Wrapper } from './button.styles';

const Button: FC<ButtonProps> = ({
  className,
  disabled,
  isLoading,
  loadingText,
  text,
  type,
  onClick,
}) => {
  const buttonDisabled = isLoading || disabled;
  const loaderText = loadingText || 'LOADING...';

  return (
    <Wrapper type={type} className={className} disabled={buttonDisabled} onClick={onClick}>
      {!isLoading ? text : loaderText}
    </Wrapper>
  );
};

type ButtonProps = {
  text: string;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  onClick?: () => void;
};

Button.defaultProps = {
  type: 'submit',
  disabled: false,
  isLoading: false,
};

export default Button;
