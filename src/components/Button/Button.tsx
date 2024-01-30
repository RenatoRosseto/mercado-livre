import React from 'react';

import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'large',
  fullWidth = false,
  ariaLabel,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
