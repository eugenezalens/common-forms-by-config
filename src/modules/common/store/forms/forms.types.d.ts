import { TFormConfigList } from 'configs/types/forms/forms.config';
import { IForm } from 'modules/common/models/forms';

interface IFormsState {
  formList: {
    [key: string]: IForm;
  };
  formConfigList: TFormConfigList;
}

export type { IFormsState };
