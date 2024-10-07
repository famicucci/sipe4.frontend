import Link from "next/link"
import { ItemsProps } from "./types"

const NavItem: React.FC<ItemsProps> = ({ href, icon, title }) => {
  return (
    <Link href={href}>
      {icon}
      <p>{title}</p>
    </Link>
  )
}
export default NavItem
