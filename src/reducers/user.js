import {ADD_USER} from "../constants";

const user = (state = {}, action) => {
  switch (action.type) {
    case action.ADD_USER:
      return {...state}

    default:
      return state;
  }
};

export default user;
