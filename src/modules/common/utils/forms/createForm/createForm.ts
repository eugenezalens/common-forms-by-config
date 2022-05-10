import { TFormConfig } from 'configs/types/forms/forms.config';
import { IForm, IFormElement } from 'modules/common/models/forms';
import { v4 } from 'uuid';

const createForm = <T extends Record<string, string>>(formConfig: TFormConfig, form?: T): IForm => {
  const elements: IFormElement[] = formConfig.configElementList.map<IFormElement>((configElement) => ({
    ...configElement,
    formUniqueKey: formConfig.uniqueKey,
    id: v4(),
    value: form?.[configElement.name] || '',
  }));

  const returnForm: IForm = { uniqueKey: formConfig.uniqueKey, elements };

  return returnForm;
};

export default createForm;
