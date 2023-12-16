import React from "react";
import { Drawer } from "antd";

interface IDrawer {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  placement: "right" | "left" | "top" | "bottom";
  children: React.ReactNode;
}

const Drawers = ({ open, children, setOpen, title, placement }: IDrawer) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      onClose={() => setOpen(false)}
      open={open}
    >
      {children}
    </Drawer>
  );
};

export default Drawers;
