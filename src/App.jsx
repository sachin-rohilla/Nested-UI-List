import { useState } from "react";

import "./App.css";
import { NestedData } from "./constants/constants";

function App() {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [showSubCategoryList, setShowSubCategoryList] = useState(false);
  const [depmartMentId, setDepartmentId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  return (
    <>
      <div className="p-16 mx-auto ">
        <div className="relative">
          {NestedData?.length > 0 &&
            NestedData?.map((deptItem) => (
              <div key={deptItem?.deptId}>
                <div className="w-44 h-42 overflow-y-auto border rounded-sm  ">
                  <h1
                    onClick={() => {
                      setShowCategoryList(true);
                      setDepartmentId(deptItem?.deptId);
                    }}
                    className={`hover:bg-yellow-400 hover:text-white px-4 py-2  cursor-pointer ${
                      depmartMentId === deptItem?.deptId
                        ? "bg-yellow-400 text-white"
                        : ""
                    }`}
                  >
                    {deptItem?.departmentName}
                  </h1>
                </div>
                {/* categorylist start */}
                <div className=" absolute top-0 left-48">
                  {showCategoryList &&
                    deptItem?.category?.length > 0 &&
                    deptItem?.category
                      ?.filter(
                        (filterItem) => filterItem?.deptId === depmartMentId
                      )
                      ?.map((catItem) => (
                        <div key={catItem?.catId}>
                          <div className="w-44 h-42 overflow-y-auto border rounded-sm   ">
                            <h1
                              onClick={() => {
                                setShowSubCategoryList(true);
                                setCategoryId(catItem?.catId);
                              }}
                              className={`hover:bg-yellow-400 hover:text-white px-4 py-2  cursor-pointer
                              ${
                                categoryId === catItem?.catId
                                  ? "bg-yellow-400 text-white"
                                  : ""
                              }
                                `}
                            >
                              {catItem?.categoryName}
                            </h1>
                          </div>

                          {/* subcategorylist start */}
                          <div className=" absolute top-0 left-48">
                            {showSubCategoryList &&
                              catItem?.subCategory?.length > 0 &&
                              catItem?.subCategory
                                ?.filter(
                                  (filterItem) =>
                                    filterItem?.catId === categoryId
                                )
                                ?.map((subCatItem) => (
                                  <div key={subCatItem?.subId}>
                                    <div className="w-44 h-42 overflow-y-auto border rounded-sm   ">
                                      <h1 className=" hover:bg-yellow-400 hover:text-white px-4 py-2  cursor-pointer">
                                        {subCatItem?.subCategoryName}
                                      </h1>
                                    </div>
                                  </div>
                                ))}
                          </div>
                          {/* subcategorylist end */}
                        </div>
                      ))}
                </div>
                {/* categorylist end */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
