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

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="relative  min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className="absolute -right-[20px] top-7">
        <Button
          onClick={() => setIsCollapsed(!isCollapsed)}
          variant={"secondary"}
          className="rounded-full p-2"
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
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