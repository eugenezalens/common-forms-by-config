import { css } from 'styled-components';
import { EBorderColor, EThemeColor } from 'modules/common/assets/styles/colors';

const defaultInputStatic = css`
  box-shadow: 0 0 0 1px ${EBorderColor.DefaultStatic};
  border-radius: 4px;
`;

const defaultInputActive = css`
  box-shadow: 0 0 0 2px ${EThemeColor.PrimaryStatic};
  border-radius: 4px;
`;

const defaultStatic = css`
  box-shadow: 0 0 0 1px ${EBorderColor.DefaultStatic};
  border-radius: 8px;
`;

const border = { defaultStatic, defaultInputStatic, defaultInputActive };

export default border;
