import { EBackgroundColor, EThemeColor } from 'modules/common/assets/styles/colors';
import border from 'modules/common/assets/styles/elements/border';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const Label = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 1px 3px;
  background-color: ${EBackgroundColor.Light};
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 15px;
`;

const changeInnerWrapperIfInputIsFocused = (isInputFocused: boolean): FlattenSimpleInterpolation => {
  if (isInputFocused) {
    return css`
      ${border.defaultActive}

      & ${Label} {
        color: ${EThemeColor.PrimaryStatic};
      }
    `;
  } else {
    return css`
      ${border.defaultStatic}
    `;
  }
};

const InnerWrapper = styled.div<{ $isInputFocused: boolean }>`
  position: relative;
  padding: 1px;

  ${({ $isInputFocused }) => changeInnerWrapperIfInputIsFocused($isInputFocused)};
`;

const ExternalWrapper = styled.div``;

const StyledTextField = {
  Input,
  Label,
  InnerWrapper,
  ExternalWrapper,
};

export default StyledTextField;
