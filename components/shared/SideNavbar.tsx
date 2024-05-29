"use client";
import React, { useState } from "react";
import { Nav } from "../others/nav";
import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "../ui/button";
import { useWindowWidth } from "@react-hook/window-size";

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();

  const mobile = onlyWidth < 1020;
  // console.log(onlyWidth)
  return (
    <div className="relative  min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobile && (
        <div className="absolute -right-[20px] top-7">
          <Button
            onClick={() => setIsCollapsed(!isCollapsed)}
            variant={"secondary"}
            className="rounded-full p-2"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobile ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Ordrs",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default SideNavbar;
