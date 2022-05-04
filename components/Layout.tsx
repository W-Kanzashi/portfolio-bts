import Navbar from "@components/Navbar/Navbar";
import React from "react";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
