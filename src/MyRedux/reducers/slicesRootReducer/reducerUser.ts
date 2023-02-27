import { actionType } from "../../../type/type";

const initialUser: any = {};

export const reducerUser = (state = initialUser, { type, payload }: actionType) => {
  switch (type) {
    case "ADD_USER":
      return { ...state, user: payload };

    default:
      return { ...state };
  }
};