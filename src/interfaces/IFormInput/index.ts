export default interface IFormInput {
  value: string;
  type?: string;
  error?: boolean;
  info: { key: string; value: string };
  onChange: (info: any, event: any) => void;
}
