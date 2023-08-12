export default interface IButton {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}
