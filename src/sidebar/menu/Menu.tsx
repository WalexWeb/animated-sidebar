import { MENU } from "./menu.data";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <nav className=''>
      {MENU.map((item) => (
        <MenuItem item={item} key={item.link} />
      ))}
    </nav>
  );
}

export default Menu;
