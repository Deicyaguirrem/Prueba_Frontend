import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Importa desde "react-dom/client"
import DataList from "./view/dataList";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Usa createRoot
root.render(<DataList />);
