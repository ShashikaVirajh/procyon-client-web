import { COLORS } from 'constants/colors.constants';
import { FC } from 'react';
import Wrapper from './icon.styles';

const Icon: FC<IconProps> = ({ icon, onClick, color, fontSize }) => {
  return (
    <Wrapper style={{ color, fontSize }} onClick={onClick}>
      {icon}
    </Wrapper>
  );
};

type IconProps = {
  icon: JSX.Element;
  onClick: () => void;
  color?: string;
  fontSize?: number;
};

Icon.defaultProps = {
  color: COLORS.LIGHT_BLUE,
  fontSize: 30,
};

export default Icon;
