import { Path, FieldValues, Control } from "react-hook-form"

export interface InputContainerProps<T extends FieldValues> {
  control?: Control<T>
  name: Path<T>
  value?: string
  placeholder?: string
  className?: string
  type?: string
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  name: string
  className?: string
}
