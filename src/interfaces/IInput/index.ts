import { ChangeEvent } from "react";

export interface IInput {
  title: string;
  value: string;
  className?: string;
  feedback?: string;
  name?: string;
  isValid?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
