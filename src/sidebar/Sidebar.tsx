import Menu from "./menu/Menu";
import { useRef, useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { m } from "framer-motion";
import { useAtom } from "jotai";
import { isCollapsedAtom } from "../store/store";
import cn from "clsx";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);
  const [isCanHover, setIsCanHover] = useState(true);
  const hoverTimeoutRef = useRef<number | null>(null);

  const toggleSidebar = () => {
    if (!isCollapsed) {
      setIsCanHover(false);

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      hoverTimeoutRef.current = setTimeout(() => {
        setIsCanHover(true);
      }, 8000);
    }

    setIsCollapsed(!isCollapsed);
  };

  return (
    <m.aside
      className={cn(
        "fixed left-4 top-4 rounded-lg bg-white/5 w-56 py-2 shadow-lg whitespace-nowrap overflow-hidden",
        { "flex items-center p-2 first:pt-[2.7rem]": isCollapsed}
      )}
      animate={{ width: isCollapsed ? 50 : 224 }}
      transition={{ type: "spring", stiffness: 200, damping: 28 }}
    >
      <button
        onClick={toggleSidebar}
        className={cn(
          "opacity-50 items-center justify-center cursor-pointer duration-300 ease-in-out hover:opacity-100",
          { "absolute top-1 left-3.5 w-12 h-12": isCollapsed },
          { "absolute top-1 right-1 m-1.5": !isCollapsed }
        )}
      >
        {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </button>
      <Menu />
    </m.aside>
  );
}

export default Sidebar;
