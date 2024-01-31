import styled, { css } from 'styled-components';

export const CartLink = styled.a`
  position: relative;
  display: inline-block;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
`;

const badgeStyles = ({ theme }: any) => css`
  position: absolute;
  top: -3px;
  right: -6px;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius.circle};
  padding: ${theme.spacings.xsmall};
  font-size: ${theme.font.sizes.xxsmall};
  height: 14px;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.span`
  ${({ theme }) => badgeStyles({ theme })}
`;
