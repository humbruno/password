import styled from 'styled-components';
import { rem } from 'polished';
import PasswordOutput from './components/PasswordOutput';
import PasswordOptions from './components/PasswordOptions';

const BodyContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundMain};
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const Title = styled.h1`
  font-size: ${rem(22)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

function App() {
  return (
    <BodyContainer>
      <ContentContainer>
        <Title>Password Generator</Title>
        <PasswordOutput />
        <PasswordOptions />
      </ContentContainer>
    </BodyContainer>
  );
}

export default App;
