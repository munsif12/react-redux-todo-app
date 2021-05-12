const initialState = {
  list: [],
};
const add_item_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_LIST": {
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    }

    default:
      return state;
  }
};
export { add_item_reducer };
