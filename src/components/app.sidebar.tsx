"use client";
import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'flowbite-react/icons';
import { SidebarItemProps } from "flowbite-react/lib/esm/components/Sidebar/SidebarItem";

export default function AppSidebar() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="max-h-max"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">Dashboard</Sidebar.Item>
          <Sidebar.Collapse label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#">Inbox</Sidebar.Item>
          <Sidebar.Item href="#">Users</Sidebar.Item>
          <Sidebar.Item href="#">Products</Sidebar.Item>
          <Sidebar.Item href="#">Sign In</Sidebar.Item>
          <Sidebar.Item href="#">Sign Up</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
