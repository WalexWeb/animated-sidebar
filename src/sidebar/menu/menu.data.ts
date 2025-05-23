import {
  Award,
  CheckSquare,
  Home,
  LucideIcon,
  Settings,
  Users,
} from "lucide-react";

export interface IMenuItem {
  icon: LucideIcon;
  name: string;
  link: string;
}

export const MENU: IMenuItem[] = [
  {
    icon: Home,
    name: "Home",
    link: "/",
  },
  {
    icon: Users,
    name: "Friends",
    link: "/friends",
  },
  {
    icon: CheckSquare,
    name: "Todo list",
    link: "/todo",
  },
  {
    icon: Award,
    name: "Achievements",
    link: "/achievements",
  },
  {
    icon: Settings,
    name: "Settings",
    link: "/settings",
  },
];
