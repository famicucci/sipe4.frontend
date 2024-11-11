import { useController, FieldValues } from "react-hook-form"
import { InputContainerProps } from "./types"
import InputView from "./InputView"

const InputContainer = <T extends FieldValues>({
  control,
  name,
  placeholder,
  className,
  type,
}: InputContainerProps<T>) => {
  const { field } = useController({ name, control })

  return (
    <InputView
      onChange={field.onChange}
      value={field.value}
      name={field.name}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default InputContainer
