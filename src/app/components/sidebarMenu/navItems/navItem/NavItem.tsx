import Link from "next/link"
import { ItemsProps } from "./types"

const NavItem: React.FC<ItemsProps> = ({ href, icon, title }) => {
  return (
    <li className="list-none mt-5">
      <Link
        href={href}
        className="flex items-center space-x-[-10px] hover:bg-gray-600 py-[-5] hover:text-gray-200 rounded-lg ">
        {icon}
        <span className="text-gray-400 flex top-1/2">{title}</span>
      </Link>
    </li>
  )
}
export default NavItem
  