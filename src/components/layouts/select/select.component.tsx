import { Path, UseFormRegister } from 'react-hook-form';
import Text from '../text-label/text-label.component';

const Select = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  register,
  options,
  ...rest
}: SelectProps<TFormValues>): JSX.Element => {
  const renderOptions = (): JSX.Element[] => {
    return options.map((option: string) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <div className='form-row'>
      {label && <Text className='form-label' label={label} />}

      <select className='form-select' {...register(name)} name={name} {...rest}>
        {renderOptions()}
      </select>
    </div>
  );
};

type SelectProps<TFormValues> = {
  name: Path<TFormValues>;
  label: string;
  register: UseFormRegister<TFormValues>;
  options: string[];
};

export default Select;
