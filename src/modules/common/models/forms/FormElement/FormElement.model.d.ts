import { EFormUniqueKey } from 'configs/uniqueKeyList';
import { EFormElementType, EFormElementWidth } from 'modules/common/constants/forms';

interface IFormElement {
  readonly id: string;
  formUniqueKey: EFormUniqueKey;
  order: number;
  name: string;
  type: EFormElementType;
  value: string;
  label?: string;
  isRequired?: boolean;
  tooltip?: string;
  style?: {
    width?: EFormElementWidth;
  };
}

export type { IFormElement };
