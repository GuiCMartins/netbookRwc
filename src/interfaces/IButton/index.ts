export default interface IButton {
  text: string;
  cancel?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
