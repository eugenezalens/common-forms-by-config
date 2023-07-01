import { IForm } from 'modules/common/models/forms';
import { IFormElement } from '../FormElement/FormElement.model';

interface IForm {
  uniqueKey: string;
  elements: IFormElement[];
}

export type { IForm };
