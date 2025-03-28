import { IMenuItem } from "./menu.data";
import { useAtomValue } from "jotai";
import { isCollapsedAtom } from "../../store/store";

function MenuItem({ item }: { item: IMenuItem }) {
  const isCollapsed = useAtomValue(isCollapsedAtom);

  return (
    <a
      href={item.link}
      rel="noreferrer noopener"
      target="_blank"
      className="group flex items-center gap-3 py-3.5 px-5 
      transition-colors duration-300 ease-in-out hover:bg-white/10"
    >
      <item.icon
        className="group-hover:text-blue-400 
      transition-colors duration-300 ease-in-out"
      />
      {!isCollapsed && <span>{item.name}</span>}
    </a>
  );
}

export default MenuItem;
