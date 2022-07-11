import { FC } from 'react';

import Text from '../text-label/text-label.component';
import Wrapper from './button-link.styles';

const ButtonLink: FC<ButtonLinkProps> = ({ text, onClick }) => {
  return (
    <Wrapper type='button' onClick={onClick}>
      <Text label={text} />
    </Wrapper>
  );
};

type ButtonLinkProps = {
  text: string;
  onClick: () => void;
};

export default ButtonLink;
