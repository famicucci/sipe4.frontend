import { SidebarMenu } from "../components/sidebarMenu"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarMenu />
      <div className="ml-44 pl-2 p-1">{children}</div>
    </div>
  )
}
