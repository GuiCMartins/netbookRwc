export default interface IInputText {
  id: string;
  placeholder: string;
  value: string;
  required?: boolean;
  type?: string;
  onChange: (event: any) => void;
}
