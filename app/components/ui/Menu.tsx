import MenuItem from "./MenuItem"

function Menu({ items }: { items: string[] }) {
  return (

    <ul className={`px-6 text absolute md:relative lg:relative md:flex md:translate-x-0 md:top-0 md:gap-6 md:px-0 `}>
      {items?.map((menu, index) => <MenuItem key={index} text={menu} />)}
    </ul>
  )
}

export default Menu