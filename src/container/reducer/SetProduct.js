import { SET_PRODUCT, CHANGE_COUNT, DELETE_PRODUCT , CHECK_OUT} from "../type";
const INTIAL_STATE = {
  productList: [],
};

export default function setPost(state = INTIAL_STATE.productList, action) {
  switch (action.type) {
    // set product in state
    case SET_PRODUCT:
      const filtered = state.filter((item) => item.id === action.payload.id);
      if (filtered.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }
    // change count product
    case CHANGE_COUNT:
      const changeData = action.payload;
      state.map((item) => {
        if (item.id === changeData.id) {
          item.count = changeData.count;
        }
        return null;
      });
    // remove item form state
    case DELETE_PRODUCT:
      const productList = state.filter((item) => item.id !== action.payload);
      return productList;

    case CHECK_OUT:
      return action.payload

    default:
      return state;
  }
}
