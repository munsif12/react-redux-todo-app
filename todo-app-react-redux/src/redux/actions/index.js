function addItem(itemValue) {
  return {
    type: "ADD_ITEM_TO_LIST",
    payload: {
      id: new Date().getTime(),
      data: itemValue,
    },
  };
}
function deleteItem(deleteItemIndex) {
  return {
    type: "DELETE_ITEM_IN_LIST",
    payload: deleteItemIndex,
  };
}
export { addItem, deleteItem };
