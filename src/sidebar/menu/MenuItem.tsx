import { IMenuItem } from "./menu.data";
import { useAtomValue } from "jotai";
import { isCollapsedAtom } from "../../store/store";
import cn from "clsx";

function MenuItem({ item }: { item: IMenuItem }) {
  const isCollapsed = useAtomValue(isCollapsedAtom);

  return (
    <a
      href={item.link}
      rel="noreferrer noopener"
      target="_blank"
      style={{ gridTemplateColumns: "1fr 6fr" }}
      className={cn(
        "group grid gap-3 py-3.5 px-1.5 transition-colors duration-300 ease-in-out",
        { "hover:bg-white/10": !isCollapsed }
      )}
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
