"use client"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { useForm } from "react-hook-form"
import { loginRequest } from "@/services/loginRequest"
import { handleLogin } from "@/redux/states/user"

interface FormData {
  user: string
  password: string
}

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error, user } = useSelector((state: RootState) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      const response = await dispatch(loginRequest(data))
      console.log(response)
      // dispatch(handleLogin({ token: response.token }))
    } catch (error) {
      console.log(error)
    }
    // const response = await loginRequest(data)
    // console.log(data)
    // dispatch(handleLogin({ token: response.succese }))
  })

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        {error && <p>{JSON.stringify(error)}</p>}
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
          {loading ? "Entrando.." : "Entrar"}
        </button>
      </form>
    </div>
  )
}

export default LoginPage
