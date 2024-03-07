import { useState } from "react";

import "./App.css";
import { NestedData } from "./constants/constants";

function App() {
  return (
    <>
      <div className="w-44 h-42 border rounded-sm  ">
        {NestedData?.length > 0 &&
          NestedData?.map((item) => (
            <h1 className=" hover:bg-yellow-400 hover:text-white px-4 py-2 border-b cursor-pointer">
              {item?.departmentName}
            </h1>
          ))}
      </div>
    </>
  );
}

export default App;
