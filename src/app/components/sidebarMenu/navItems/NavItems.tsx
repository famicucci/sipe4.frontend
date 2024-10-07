import { IconPrice, IconStatistics } from "@/app/assets/icons"
import { NavItem } from "./navItem"

const NavItems = () => {
  return (
    <div>
      <NavItem icon={<IconPrice />} title="precios" href="/precios" />
      <NavItem
        icon={<IconStatistics />}
        title="estadisticas"
        href="/estadisticas"
      />
    </div>
  )
}

export default NavItems
