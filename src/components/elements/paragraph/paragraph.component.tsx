import { FC } from 'react';

const Paragraph: FC<ParagraphProps> = ({ className, content }) => {
  return <p className={className}>{content}</p>;
};

type ParagraphProps = {
  content: string;
  className?: string;
};

export default Paragraph;
