import { FC, forwardRef } from 'react';

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type, ...rest }, ref) => {
    return <input ref={ref} name={name} aria-label={label} type={type} {...rest} />;
  },
);

type TextInputTypes = 'text' | 'email' | 'number' | 'password';

export type InputProps = {
  name: string;
  label?: string;
  type?: TextInputTypes;
  className?: string;
};
