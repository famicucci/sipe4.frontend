"use client"
import { useForm } from "react-hook-form"

interface FormData {
  user: string
  password: string
}

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        {errors.user && <p className="text-red-500">{errors.user.message}</p>}
        <div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="bg-gray-200 text-black rounded-md"
            {...register("user", {
              required: { value: true, message: "*Campos obligatorios" },
              maxLength: {
                value: 10,
                message: "*Maximo de 10 caracteres",
              },
            })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-gray-200 text-black rounded-md"
            {...register("password", {
              required: { value: true, message: "*Campos obligatorios" },
            })}
          />
        </div>
        <button className="bg-indigo-500 p-2 rounded-md" type="submit">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default LoginPage
