import Folder from "./components/Folder";
import "./styles.css";
import react, { useCallback, useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  const datas = {
    name: "root",
    isFolder: true,
    files: [
      {
        name: "public",
        isFolder: true,
        files: [
          {
            name: "index",
            isFolder: true,
            files: [{ name: "index.html", isFolder: false }]
          }
        ]
      },
      {
        name: "src",
        isFolder: true,
        files: [
          { name: "apps.js", isFolder: false },
          { name: "index.js", isFolder: false }
        ]
      },
      {
        name: "css",
        isFolder: false
      }
    ]
  };

  return (
    <div style={{}} className="App">
      <Folder datas={datas} />
    </div>
  );
}
