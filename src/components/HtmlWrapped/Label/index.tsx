import { LabelHtml } from './styles';

const Label = ({ htmlFor, content }: { htmlFor: string; content: string }) => {
  return <LabelHtml htmlFor={htmlFor}>{content}</LabelHtml>;
};

export default Label;
