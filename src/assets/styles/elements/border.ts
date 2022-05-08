import { css } from 'styled-components';
import { EBorderColor, EThemeColor } from 'assets/styles/colors';

const defaultStatic = css`
  box-shadow: 0 0 0 1px ${EBorderColor.DefaultStatic};
  border-radius: 4px;
`;

const defaultActive = css`
  box-shadow: 0 0 0 2px ${EThemeColor.PrimaryStatic};
  border-radius: 4px;
`;

const border = { defaultStatic, defaultActive };

export default border;
