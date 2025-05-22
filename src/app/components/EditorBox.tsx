import React from "react";

export default function EditorBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
