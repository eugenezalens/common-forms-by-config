import { TFormConfigList } from 'configs/types/forms/forms.config';
import { EFormUniqueKey } from 'configs/uniqueKeyList';
import { authFormConfig } from 'configs/list/forms/authentication/authentication.forms.config';

const formConfigList: TFormConfigList = {
  [EFormUniqueKey.Auth]: authFormConfig,
};

export default formConfigList;
