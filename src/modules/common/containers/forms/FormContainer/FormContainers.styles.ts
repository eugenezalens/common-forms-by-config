import border from 'modules/common/assets/styles/elements/border';
import styled from 'styled-components';

const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 12px;
  margin-top: 40px;
  margin-bottom: 20px;

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Header = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e6f0;
`;

const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px;

  ${border.defaultStatic}
`;

const StyledFormContainer = {
  Title,
  Body,
  Header,
  Wrapper,
};

export default StyledFormContainer;
