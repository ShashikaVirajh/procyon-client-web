import styled from 'styled-components';

export const Wrapper = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: transparent;
  border-radius: 5px;
  letter-spacing: 1px;
  line-height: 20px;
  padding: 8px;
  margin: 5px 0 5px 0;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #60a5fa;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
