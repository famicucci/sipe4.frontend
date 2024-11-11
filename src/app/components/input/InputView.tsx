  import { InputProps } from "./types"

  const InputView: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    type,
    className,
  }) => {
    const baseClasses =
      "shadow appearance-none border rounded-xl w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={`${baseClasses} ${className ?? ""}`}
      />
    )
  } 

  export default InputView
