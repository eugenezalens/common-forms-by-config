import { EFormUniqueKey } from 'configs/uniqueKeyList';
import { IFormElement } from 'modules/common/models/forms';

type TFormElementConfig = Omit<IFormElement, 'id' | 'value' | 'formUniqueKey'>;

type TFormConfig = {
  uniqueKey: EFormUniqueKey;
  configElementList: TFormElementConfig[];
};

type TFormConfigList = {
  [key in EFormUniqueKey]: TFormConfig;
};

export { TFormConfigList, TFormElementConfig, TFormConfig };
