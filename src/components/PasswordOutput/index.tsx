import styled from 'styled-components';
import { rem } from 'polished';
import { MdContentCopy } from 'react-icons/md';
import theme from '~/styles/theme';

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Password = styled.strong`
  color: ${({ theme }) => theme.colors.placeholderText};
  font-size: ${rem(20)};
`;

const CopyClipboard = styled.button`
  border: none;
  background-color: transparent;

  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

interface Props {
  password?: string;
}

const PasswordOutput = ({ password }: Props) => {
  return (
    <Container>
      <Password>{password || 'P4$5W0rD!'}</Password>
      <CopyClipboard title="Copy to Clipboard">
        <MdContentCopy color={theme.colors.accent} size="20" />
      </CopyClipboard>
    </Container>
  );
};

export default PasswordOutput;
