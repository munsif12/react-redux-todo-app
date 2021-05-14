import { initialState } from "./addItem";

function delete_item_reducer(state = initialState, action) {
  switch (action.type) {
    case "DELETE_ITEM_IN_LIST":
      const filteredList = state.list.filter(
        (val) => val.id !== action.payload
      );
      return {
        list: filteredList,
      };

    default:
      return state;
  }
}
export { delete_item_reducer };
