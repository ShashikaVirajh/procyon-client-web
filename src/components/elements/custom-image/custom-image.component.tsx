import { FC } from 'react';

const CustomImage: FC<ImageProps> = ({ source, alt, className }) => {
  return <img src={source} alt={alt} className={className} />;
};

type ImageProps = {
  source: string;
  alt?: string;
  className?: string;
};

export default CustomImage;
