import React from "react";
import ReactDOM from "react-dom/client";
import { EmailEditor } from "./EmailEditor";

const mountEditor = (id: string) => {
  const ele = document.getElementById(id);
  ReactDOM.createRoot(ele as HTMLElement).render(<EmailEditor />);
};

export { mountEditor };
