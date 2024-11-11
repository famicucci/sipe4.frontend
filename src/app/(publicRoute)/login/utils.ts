import { LoginUser } from "@/services/loginRequest"
import * as yup from "yup"

export const formLoginSchema = yup
  .object({
    user: yup
      .string()
      .max(10, "Se permite maximo 10 caracteres")
      .required("El campo usuario es requerido"),
    password: yup.string().required("El campo contraseña es requerido"),
  })
  .required()

export const defaultValues: LoginUser = {
  user: "",
  password: "",
}
