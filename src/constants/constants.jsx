export const NestedData = [
  {
    deptId: 1,
    departmentName: "Fashion",
    category: [
      {
        deptId: 1,
        catId: 1,
        categoryName: "Men",
        subCategory: [
          {
            catId: 1,
            subId: 1,
            subCategoryName: "T-Shirts",
          },
          {
            catId: 1,
            subId: 2,
            subCategoryName: "Trousers",
          },
        ],
      },
      {
        deptId: 1,
        catId: 2,
        categoryName: "Women",
        subCategory: [
          {
            catId: 2,
            subId: 1,
            subCategoryName: "T-Shirts",
          },
          {
            catId: 2,
            subId: 2,
            subCategoryName: "Trousers",
          },
        ],
      },
    ],
  },

  {
    deptId: 2,
    departmentName: "Electronics",
    category: [
      {
        deptId: 2,
        catId: 1,
        categoryName: "Mobiles",
        subCategory: [
          {
            catId: 1,
            subId: 1,
            subCategoryName: "Apple",
          },
          {
            catId: 1,
            subId: 2,
            subCategoryName: "Sumsung",
          },
        ],
      },
      {
        deptId: 2,
        catId: 2,
        categoryName: "Laptop",
        subCategory: [
          {
            catId: 2,
            subId: 1,
            subCategoryName: "Hp",
          },
          {
            catId: 2,
            subId: 2,
            subCategoryName: "Dell",
          },
        ],
      },
    ],
  },
];
