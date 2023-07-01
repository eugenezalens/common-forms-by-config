import { EFormElementWidth } from 'modules/common/constants/forms';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const changeWidthOfWrapper = (width: EFormElementWidth): FlattenSimpleInterpolation | undefined => {
  if (width === EFormElementWidth.Half) {
    return css`
      flex: 1 0 40%;
    `;
  }

  if (width === EFormElementWidth.Full) {
    return css`
      flex: 1 0 70%;
    `;
  }
};

const Wrapper = styled.div<{ $width: EFormElementWidth }>`
  margin: 0 8px;

  ${({ $width }) => changeWidthOfWrapper($width)}
`;

const StyledFormElementContainer = {
  Wrapper,
};

export default StyledFormElementContainer;
