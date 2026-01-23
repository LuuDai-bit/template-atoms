import './style.scss'

export const ButtonTypes = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
}

export const ButtonThemes = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
}

export const ButtonSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}

type Props = {
  content: string,
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
  theme?: string,
  size?: string,
  className?: string,
  disabled: boolean,
  onClick: () => void,
}

const Button = ({
  content,
  type,
  className = '',
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonTypes.button,
  theme: ButtonThemes.default,
  size: ButtonSizes.medium,
  className: '',
  disabled: false,
  onClick: () => {},
}

export default Button;

export type ButtonProps = Props;
