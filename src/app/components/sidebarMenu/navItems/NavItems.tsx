import { IconPrice, IconStatistics } from "@/app/assets/icons"
import { NavItem } from "./navItem"

const NavItems = () => {
  const navItem = [
    {
      icon: <IconPrice />,
      title: "Precios",
      href: "/precios",
    },
    {
      icon: <IconStatistics />,
      title: "estadisticas",
      href: "/estadisticas",
    },
  ]

  return (
    <ul className="mt-6 ml-1 pr-1">
      {navItem.map((item) => {
        // if (item.role === "admin" && userType !== "admin") return nul
        return (
          <NavItem
            key={item.title}
            href={item.href}
            icon={item.icon}
            title={item.title}
          />
        )
      })}
    </ul>
  )
}

export default NavItems
