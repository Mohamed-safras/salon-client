const INITIAL_PAGE = {
  currentPage: "home",
};

export const currentPage = (state = INITIAL_PAGE, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};
