/** REDUX, RXJS FEATURES */
import { tassign } from 'tassign'; 
import { CHECKIN_SELECTED } from './actions';


export interface IAppState {
  checkin_date: number;
  checkout_date: number;
}

export const INITIAL_STATE = {
  checkin_date: null,
  checkout_date: null
}


export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case CHECKIN_SELECTED:
      return  tassign(state, { checkin_date : action.payload});
    default:
      break;
  }
  return state;
}