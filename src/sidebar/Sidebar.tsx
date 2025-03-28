import Menu from "./menu/Menu";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useAtom } from "jotai";
import { isCollapsedAtom } from "../store/store";
import { m } from "framer-motion";
import cn from "clsx";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <m.aside
      className={cn(
        "fixed left-4 top-4 rounded-lg bg-white/5 w-56 py-2 shadow-lg",
        { "p-2 first:pt-[2.7rem]": isCollapsed }
      )}
      animate={{ width: isCollapsed ? 80 : 224 }}
      transition={{ type: "spring", stiffness: 200, damping: 28 }}
    >
      <button
        onClick={toggleSidebar}
        className={cn(
          "opacity-50 items-center justify-center cursor-pointer duration-300 ease-in-out hover:opacity-100",
          { "absolute top-1 left-7 w-12 h-12 ": isCollapsed },
          { "flex justify-end ": !isCollapsed }
        )}
      >
        {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </button>
      <Menu />
    </m.aside>
  );
}

export default Sidebar;
