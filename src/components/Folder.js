import react, { useState } from "react";

function Folder({ datas }) {
  const [res, setRes] = useState(false);

  console.log(datas);

  return (
    <div>
      <>
        <p onClick={() => setRes(!res)}>{datas.name}</p>
        <div style={{ display: res ? "block" : "none" }}>
          {datas.isFolder ? (
            datas.files.map((val) => {
              return <Folder datas={val} />;
            })
          ) : (
            <p></p>
          )}
        </div>
      </>
    </div>
  );
}

export default Folder;
