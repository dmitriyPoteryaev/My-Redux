import { actionType } from "../../../type/type";

const initialCount: any = {
  count: 0,
};

export const reducerCount = (state = initialCount, action: actionType) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }
    default:
      return { ...state };
  }
};
