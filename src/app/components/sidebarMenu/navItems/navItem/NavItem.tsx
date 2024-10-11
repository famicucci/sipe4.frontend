import Link from "next/link"
import { ItemsProps } from "./types"

const NavItem: React.FC<ItemsProps> = ({ item }) => {
  return (
    <li className="list-none mt-5">
      <Link
        href={item.href}
        className="flex items-center space-x-[-10px] hover:bg-gray-700 py-[-5] hover:text-gray-200 rounded-lg ">
        {item.icon}
        <span className="text-gray-400 flex top-1/2">{item.title}</span>
      </Link>
    </li>
  )
}
export default NavItem
