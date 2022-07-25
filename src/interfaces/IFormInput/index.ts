export default interface IFormInput {
  value: string;
  type?: string;
  isValid: boolean | undefined;
  info: { key: string; value: string };
  setIsValid: (isValid: boolean) => void;
  onChange: (info: any, event: any) => void;
}
