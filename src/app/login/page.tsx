"use client"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { loginRequest } from "@/services/loginRequest"
import { handleLogin } from "@/redux/states/user"
import { LoginResponse } from "@/redux/states/user"

export interface LoginUser {
  user: string
  password: string
}

const LoginPage: React.FC = () => {
  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>()

  const onSubmit = handleSubmit(async (data: LoginUser) => {
    try {
      const response: LoginResponse = await dispatch(
        loginRequest(data)
      ).unwrap()

      dispatch(
        handleLogin({ token: response.success, userType: response.userType })
      )
      router.push("/precios")
    } catch (error) {
      console.log(error)
    }
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
