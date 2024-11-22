import { NavItems } from "./navItems"

export const SidebarMenu = () => {
  return (
    <div className="flex flex-col bg-gray-800 text-white h-[98.5vh] w-44 fixed rounded-lg m-1">
      <div className="grow">
        <NavItems />
      </div>
      {/* <div className="flex flex-col items-center mb-6"></div> */}
    </div>
  )
}

export default SidebarMenu
