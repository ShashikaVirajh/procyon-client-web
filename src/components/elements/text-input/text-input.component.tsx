import { FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import Text from '../text-label/text-label.component';

import { Input, InputProps } from './input';

const TextInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  error,
  label,
  ...rest
}: TextInputProps<TFormValues>): JSX.Element => {
  return (
    <div className='form-row'>
      {label && <Text className='form-label' label={label} />}

      <Input
        name={name}
        className='form-input'
        {...rest}
        {...(register && register(name, rules))}
      />

      <Text className='form-error' label={error?.message || ''} />
    </div>
  );
};

type TextInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  error?: FieldError | undefined;
} & Omit<InputProps, 'name'>;

export default TextInput;
