"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { loginRequest } from "@/services/loginRequest"
import { LoginUser } from "@/services/loginRequest"
import { yupResolver } from "@hookform/resolvers/yup"
import { formLoginSchema } from "./utils/formValidation"

const LoginPage: React.FC = () => {
  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: yupResolver(formLoginSchema),
  })

  const onSubmit = (data: LoginUser) => {
    startTransition(async () => {
      try {
        await loginRequest(data)
        router.push("/precios")
      } catch (error: any) {
        setError("user", {
          type: "manual",
          message: error.message,
        })
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {errors.user && <p className="text-red-500">{errors.user.message}</p>}
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="bg-gray-200 text-black rounded-md"
            {...register("user")}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-gray-200 text-black rounded-md"
            {...register("password")}
          />
        </div>
        <button className="bg-indigo-500 p-2 rounded-md" type="submit">
          {!isPending ? "Entrar" : "Entrando.."}
        </button>
      </form>
    </div>
  )
}

export default LoginPage
