type Props = {
  fontSize: string,
  fontWeight: string,
  content: string,
  color: string,
  className: string,
}

const Input = ({
  fontSize,
  fontWeight,
  color,
  content,
  className
}: Props) => {
  return (
    <p className={className} style={{ fontSize, fontWeight, color }}>
      {content}
    </p>
  )
}

Input.defaultProps = {
  fontSize: '16px',
  fontWeight: 'normal',
  content: '',
  color: '#000000',
  className: '',
}

export default Input;
