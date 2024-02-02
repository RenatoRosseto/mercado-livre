import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    content: "."
  }
  33% {
    content: ".."
  }
  66% {
    content: "..."
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  font-size: 18px;
`;

export const LoadingText = styled.span`
  margin-right: 8px;
`;

export const LoadingDots = styled.span`
  font-size: 28px;
  margin-top: -10px;
  &::after {
    content: '';
    animation: ${animation} 1s infinite;
  }
`;
