"use client"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { loginRequest } from "@/services/loginRequest"
import { LoginUser } from "@/services/loginRequest"

const LoginPage: React.FC = () => {
  const [error, setError] = useState("")
  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>()

  const onSubmit = (data: LoginUser) => {
    startTransition(async () => {
      try {
        await loginRequest(data)
        router.push("/precios")
      } catch (error: any) {
        console.log(error)
        setError(error.toString())
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
            {...register("user", {
              required: { value: true, message: "*Campos obligatorios" },
              maxLength: {
                value: 10,
                message: "*Máximo de 10 caracteres",
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
              required: {
                value: true,
                message: "*Campo de contraseña obligatorio",
              },
            })}
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
