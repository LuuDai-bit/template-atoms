type Props = {
  content: string,
  className?: string,
  htmlFor: string,
  disabled?: boolean,
}

const Label = ({
  content,
  className = '',
  htmlFor = '',
  disabled = false,
}: Props) => {
  return (
    <label htmlFor={htmlFor} className={className} aria-disabled={disabled}>
      {content}
    </label>
  )
}

Label.defaultProps = {
  className: '',
  disabled: false,
}

export default Label;

export type LabelProps = Props;
