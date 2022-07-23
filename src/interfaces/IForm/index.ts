import { ReactNode } from 'react';

export interface IForm {
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
