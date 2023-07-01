import { forwardRef, memo, useCallback } from 'react';
import { TFormElementContainerProps } from 'modules/common/containers/forms/FormElementContainer/FormElementContainer.types';
import { TextField } from 'modules/common/components/forms';
import Styled from 'modules/common/containers/forms/FormElementContainer/FormElementContainer.styles';
import { EFormElementWidth } from 'modules/common/constants/forms';

const FormElementContainer = forwardRef<HTMLInputElement, TFormElementContainerProps>(
  ({ element, handleChangeElement }, inputRef) => {
    const handleChange = useCallback(
      (value: string): void => {
        handleChangeElement?.({ ...element, value });
      },
      [element]
    );

    return (
      <Styled.Wrapper $width={element?.style?.width || EFormElementWidth.Half}>
        <TextField
          value={element.value}
          label={element?.label}
          placeholder={element?.tooltip}
          type={'text'}
          onChange={handleChange}
          ref={inputRef}
        />
      </Styled.Wrapper>
    );
  }
);

FormElementContainer.displayName = 'FormElementContainer';

export default memo(FormElementContainer);
