function addItem(itemValue) {
  return {
    type: "ADD_ITEM_TO_LIST",
    payload: {
      id: new Date().getTime(),
      data: itemValue,
    },
  };
}
export { addItem };
