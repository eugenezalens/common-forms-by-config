import { EFormUniqueKey } from 'configs/uniqueKeyList';
import { FormContainer } from 'modules/common/containers/forms';
import { FC } from 'react';
import styled from 'styled-components';

const App: FC = () => {
  return (
    <div>
      <StyledWrapper>
        <StyledTitle>EXAMPLE:</StyledTitle>
        <FormContainer uniqueKey={EFormUniqueKey.Auth} />
      </StyledWrapper>
    </div>
  );
};

const StyledTitle = styled.div`
  margin-bottom: 20px;
`;

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
`;

export default App;
