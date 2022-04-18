export const getCheckedProducts = (filterState, productList) => {
    return [...productList].filter((item) =>
      filterState.Aluminium || filterState.Steel || filterState.Glass || filterState.Plastic || filterState.Disposable|| filterState.School || filterState.Baby
        ? filterState[item.category]
        : true
    );
  };

  // Aluminium: false,
  //   Steel: false,
  //   Glass: false,
  //   Plastic: false,
  //   Disposable: false,
  //   OldSchool:false,
  //   Baby:false,
  //   price: 1500,
  //   searchKeyword: "",