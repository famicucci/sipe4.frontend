import { SidebarMenu } from "../components/sidebarMenu/index"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarMenu />
      <div className="ml-44 pl-4 p-1">{children}</div>
    </div>
  )
}
