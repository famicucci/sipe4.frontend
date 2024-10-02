import Link from "next/link"

const ErrorPage = () => {
  return (
    <div className="text-center p-2 mt-20 w-1/2 mx-auto">
      <h1 className="text-red-600 bg-red-200 rounded-md border-2 border-b-red-700">
        Error: Solo disponible para <span>*Admin</span>
      </h1>
      <Link href="/precios">
        <button className="text-red-600">Atras</button>
      </Link>
    </div>
  )
}

export default ErrorPage
