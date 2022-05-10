import { IFormElement } from 'modules/common/models/forms';

type TFormElementContainerProps = {
  element: IFormElement;
  handleChangeElement: (element: IFormElement) => void;
};

export type { TFormElementContainerProps };
