import React from "react";
import dynamic from "next/dynamic";

const TenGroup = dynamic(() => import("./group-in-tens"));

const PadGroup = () => {
  return (
    <>
      <TenGroup />
      <TenGroup />
      <TenGroup />
      <TenGroup />
      <TenGroup />
    </>
  );
};

export default PadGroup;
