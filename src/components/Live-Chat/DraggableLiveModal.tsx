"use client";

import React from "react";

type DraggableLiveModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DraggableLiveModal = () => {
  return (
    <div
      className="
  h-[400px]
   w-[400px]
    overflow-x-hidden
    bg-[#f0f0f5]
    px-3 py-2

    "
    >
      work
    </div>
  );
};

export default DraggableLiveModal;
