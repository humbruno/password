import { rem } from 'polished';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelTitle = styled.p`
  color: ${({ theme }) => theme.colors.textMain};
`;

const CharLength = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${rem(20)};
`;

const RangeInput = styled.input`
  width: 100%;
  margin-top: 18px;

  -webkit-appearance: none;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 5px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textMain};
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

const CheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
`;

const InputGroup = styled.label`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.colors.textMain};

  input {
    accent-color: ${({ theme }) => theme.colors.accent};
  }
`;

const PasswordOptions = () => {
  const [inputValue, setInpuValue] = useState<number>(1);

  return (
    <Container>
      <Label htmlFor="range">
        <LabelTitle>Character Length</LabelTitle>
        <CharLength>{inputValue}</CharLength>
      </Label>
      <RangeInput
        onChange={(e) => setInpuValue(e.target.valueAsNumber)}
        value={inputValue}
        min={1}
        max={20}
        type="range"
        name="range"
        id="range"
      />
      <CheckboxesContainer>
        <InputGroup>
          <input type="checkbox" />
          Include Uppercase Letters
        </InputGroup>
        <InputGroup>
          <input type="checkbox" />
          Include Lowercase Letters
        </InputGroup>
        <InputGroup>
          <input type="checkbox" />
          Include Numbers
        </InputGroup>
        <InputGroup>
          <input type="checkbox" />
          Include Symbols
        </InputGroup>
      </CheckboxesContainer>
    </Container>
  );
};

export default PasswordOptions;
