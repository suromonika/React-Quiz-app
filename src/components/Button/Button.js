import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Button.css';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function Button({
  children,
  onClick,
  to,
  type = 'button',
  buttonKey,
  value,
  disabled,
}) {
  const Component = to ? StyledLink : 'button';
  const buttonType = to ? null : type;

  const className = disabled ? 'Button Button--disabled' : 'Button';

  return (
    <Component
      className={className}
      onClick={onClick}
      to={to}
      type={buttonType}
      key={buttonKey}
      value={value}
      disabled={disabled}
    >
      {children}
    </Component>
  );
}

export default Button;
