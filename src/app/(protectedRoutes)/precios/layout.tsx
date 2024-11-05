import SearchProduct from "./SearchProduct"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchProduct />
      <div className="ml-44 pl-4 p-1">{children}</div>
    </div>
  )
}
