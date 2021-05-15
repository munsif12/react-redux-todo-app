const initialState = {
  list: [],
};
const ADD_ITEM = "ADD_ITEM_TO_LIST";
const DELETE_ITEM = "DELETE_ITEM_IN_LIST";
const all_Reducers = (state = initialState, action) => {
  console.log(state.list);
  switch (action.type) {
    case ADD_ITEM:
      const { id, data } = action.payload;
      return {
        list: [
          ...state.list, // to add previous value to the list which aer alredy present int the  list
          {
            id,
            data,
          },
        ],
      };
    case DELETE_ITEM:
      const filteredList = state.list.filter(
        (val) => val.id !== action.payload
      ); //like we did in array while creating a list
      console.log(action.payload);
      console.log(filteredList);
      return {
        list: filteredList, //is list me wohe values hoge jinke id match nhi kry ge
      };

    default:
      return state;
  }
};
export { all_Reducers, initialState };
