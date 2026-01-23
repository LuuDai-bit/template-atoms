import './style.scss'

type Props = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
  placeholder: string,
  theme?: string,
  size?: string,
  className?: string,
  disabled?: boolean,
  onChange?: () => void,
}

const Input = ({
  type,
  placeholder,
  className = '',
  disabled = false,
  onChange,
}: Props) => {
  return (
    <input type={type}
           placeholder={placeholder}
           className={className}
           disabled={disabled}
           onChange={onChange} />
  )
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  theme: 'default',
  size: 'medium',
  className: '',
  disabled: false,
  onChange: () => {},
}

export default Input;

export type InputProps = Props;
