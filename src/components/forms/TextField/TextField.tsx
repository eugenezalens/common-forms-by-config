import { ChangeEvent, forwardRef, memo, useMemo } from 'react';
import Styled from 'components/forms/TextField/TextField.styles';
import { TTextFiledProps, TTextFiledState } from 'components/forms/TextField/TextField.types';
import { useCommonState } from 'hooks';

const TextField = forwardRef<HTMLInputElement, TTextFiledProps>(
  ({ isRequired, onChange, type, value = '', placeholder = '', label = '' }, inputRef) => {
    const [state, setState] = useCommonState<TTextFiledState>({ isInputFocused: false });

    const isLabel: boolean = useMemo(() => {
      return !!(label && (value || state.isInputFocused));
    }, [state.isInputFocused, value, label]);

    const displayedTooltip: string = useMemo(() => {
      if (value || state.isInputFocused) return placeholder;
      else return label;
    }, [state.isInputFocused, value, placeholder, label]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event.target.value);
    };

    return (
      <Styled.ExternalWrapper>
        <Styled.InnerWrapper $isInputFocused={state.isInputFocused}>
          {isLabel && <Styled.Label>{label}</Styled.Label>}

          <Styled.Input
            value={value}
            type={type || 'text'}
            required={isRequired}
            placeholder={displayedTooltip}
            ref={inputRef}
            onChange={handleChange}
            onFocus={() => setState({ isInputFocused: true })}
            onBlur={() => setState({ isInputFocused: false })}
          />
        </Styled.InnerWrapper>
      </Styled.ExternalWrapper>
    );
  }
);

TextField.displayName = 'TextField';

export default memo(TextField);
