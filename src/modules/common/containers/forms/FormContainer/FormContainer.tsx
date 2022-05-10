import { FC, FormEvent, useCallback, useEffect, useMemo } from 'react';
import { TFormContainerProps } from 'modules/common/containers/forms/FormContainer/FormContainer.types';
import { useTypedDispatch, useTypedSelector } from 'modules/common/hooks';
import { formsActions, formsSelector } from 'modules/common/store/forms/forms.slice';
import { createForm } from 'modules/common/utils/forms';
import { IFormElement } from 'modules/common/models/forms';
import Styled from 'modules/common/containers/forms/FormContainer/FormContainers.styles';
import FormElementContainer from '../FormElementContainer/FormElementContainer';

const FormContainer: FC<TFormContainerProps> = ({ uniqueKey }) => {
  const dispatch = useTypedDispatch();

  const { formList, formConfigList } = useTypedSelector(formsSelector);

  useEffect(() => {
    const formConfig = formConfigList?.[uniqueKey];

    if (formConfig) dispatch(formsActions.setForm(createForm(formConfig)));
  }, []);

  const availableFormElements: IFormElement[] = useMemo(() => {
    const formElements = formList?.[uniqueKey]?.elements;

    return formElements?.length ? formElements : [];
  }, [formList?.[uniqueKey]]);

  const handleChangeElement = useCallback((element: IFormElement) => {
    dispatch(formsActions.handleChangeElement(element));
  }, []);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <Styled.Header>
        <Styled.Title>TEST FORM</Styled.Title>
      </Styled.Header>
      <Styled.Body>
        {availableFormElements.map((element) => (
          <FormElementContainer
            key={element.id}
            element={element}
            handleChangeElement={handleChangeElement}
          />
        ))}
      </Styled.Body>
    </Styled.Wrapper>
  );
};

export default FormContainer;
