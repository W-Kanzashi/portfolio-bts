import Navbar from "@components/Navbar";
import React from "react";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
