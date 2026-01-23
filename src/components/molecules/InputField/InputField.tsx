import type { InputProps } from '../../atoms/Input/Input';
import type { LabelProps } from '../../atoms/Label/Label';

type Props = InputProps & LabelProps;

const InputField = ({
  type,
  placeholder,
  className = '',
  disabled = false,
  onChange,
  content,
  htmlFor,
}: Props) => {
  return (
    <div className={`w-full max-w-sm min-w-[200px] ${className}`}>
      <label htmlFor={htmlFor}
             className="block mb-2 text-sm text-slate-600">
        {content}
      </label>
      <input type={type}
             placeholder={placeholder}
             disabled={disabled}
             className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
             onChange={onChange}
             id={htmlFor} />
    </div>
  )
}

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  disabled: false,
  onChange: () => {},
  content: '',
  htmlFor: '',
}

export default InputField;
