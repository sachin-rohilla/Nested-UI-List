import { useState } from "react";

import "./App.css";
import { NestedData } from "./constants/constants";

function App() {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [showSubCategoryList, setShowSubCategoryList] = useState(false);
  const [showSubCategoryImage, setShowSubCategoryImage] = useState(false);
  const [depmartMentId, setDepartmentId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [subCategoryId, setSubCategoryId] = useState(null);

  return (
    <>
      <div className="px-16 py-8 mx-auto ">
        <h1 className="py-4 font-semibold text-xl ">Nested Menu UI List</h1>
        <div className="relative">
          {NestedData?.length > 0 &&
            NestedData?.map((deptItem) => (
              <div key={deptItem?.deptId}>
                <div className="w-44 h-42 overflow-y-auto border rounded-sm  shadow-md ">
                  <h1
                    onClick={() => {
                      setShowCategoryList(true);
                      setDepartmentId(deptItem?.deptId);
                      setShowSubCategoryList(false);
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
                          <div className="w-44 h-42 overflow-y-auto border rounded-sm shadow-md   ">
                            <h1
                              onClick={() => {
                                setShowSubCategoryList(true);
                                setCategoryId(catItem?.catId);
                                setShowSubCategoryImage(false);
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
                                    <div className="w-44 h-42 overflow-y-auto border rounded-sm shadow-md   ">
                                      <h1
                                        className={`hover:bg-yellow-400 hover:text-white px-4 py-2  cursor-pointer 
                                            ${
                                              subCategoryId ===
                                              subCatItem?.subId
                                                ? "bg-yellow-400 text-white"
                                                : ""
                                            }
                                            `}
                                        onClick={() => {
                                          setShowSubCategoryImage(true);
                                          setSubCategoryId(subCatItem?.subId);
                                        }}
                                      >
                                        {subCatItem?.subCategoryName}
                                      </h1>
                                    </div>
                                    {/* subcategorylist start */}
                                    {showSubCategoryImage &&
                                      subCatItem?.subId === subCategoryId && (
                                        <div className=" absolute top-0 left-48 w-52 h-52 border rounded shadow-md">
                                          {subCatItem?.subCategoryImage ? (
                                            <img
                                              src={subCatItem?.subCategoryImage}
                                              alt="subCategoryImage"
                                            />
                                          ) : (
                                            <>
                                              <img src="https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc=" />
                                            </>
                                          )}
                                        </div>
                                      )}
                                    {/* subcategorylist end */}
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
