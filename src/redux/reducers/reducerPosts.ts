import { Utility } from "../../utils/Utility";

export const reducerPosts = (prevState: any = {}, action: any) => {
  let clonedState = Utility.clone(prevState);

  switch (action.type) {
    default:
      break;
  }
  return clonedState;
};
