import { GET_PRODUCTS } from "../actions/types";


export default function(state = [], action){
  switch(action.type){
    case GET_PRODUCTS:
      console.log(action);
      return action.payload;
  }
  return state;
}
