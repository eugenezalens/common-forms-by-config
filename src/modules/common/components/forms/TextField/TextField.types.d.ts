type TInputType = 'email' | 'number' | 'password' | 'text';

type TTextFiledProps = {
  value?: string | number;
  type?: TInputType;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  onChange: (value: string) => void;
};

type TTextFiledState = {
  isInputFocused: boolean;
};

export type { TTextFiledProps, TTextFiledState };
