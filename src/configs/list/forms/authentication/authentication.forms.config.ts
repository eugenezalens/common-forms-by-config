import { TFormConfig, TFormElementConfig } from 'configs/types/forms/forms.config';
import { EFormUniqueKey } from 'configs/uniqueKeyList';
import { EFormElementType, EFormElementWidth } from 'modules/common/constants/forms';

enum EAuthFormName {
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  Password = 'password',
}

const firstNameFormElement: TFormElementConfig = {
  name: EAuthFormName.FirstName,
  order: 1,
  type: EFormElementType.String,
  label: 'First name',
  isRequired: true,
  tooltip: 'First name...',
  style: {
    width: EFormElementWidth.Half,
  },
};

const lastNameFormElement: TFormElementConfig = {
  name: EAuthFormName.LastName,
  order: 2,
  type: EFormElementType.String,
  label: 'Last name',
  isRequired: true,
  tooltip: 'Last name...',
  style: {
    width: EFormElementWidth.Half,
  },
};

const emailFormElement: TFormElementConfig = {
  name: EAuthFormName.Email,
  order: 3,
  type: EFormElementType.Email,
  label: 'Email',
  isRequired: true,
  tooltip: 'Email...',
  style: {
    width: EFormElementWidth.Full,
  },
};

const passwordFormElement: TFormElementConfig = {
  name: EAuthFormName.Password,
  order: 4,
  type: EFormElementType.Password,
  label: 'Password',
  isRequired: true,
  tooltip: 'Password...',
  style: {
    width: EFormElementWidth.Full,
  },
};

const authFormConfig: TFormConfig = {
  uniqueKey: EFormUniqueKey.Auth,
  configElementList: [firstNameFormElement, lastNameFormElement, emailFormElement, passwordFormElement],
};

export { authFormConfig };
