/** ANY OTHER STORE GOES HERE */
import { IPlaceholderState, PLACEHOLDER_INIT_STATE, placeholderReducer } from './components/placeholder/store';

import { tassign } from 'tassign'; 
import { combineReducers } from 'redux';


export interface IAppState {
  placeholder: IPlaceholderState
}

export const INITIAL_STATE = {
  placeholder: PLACEHOLDER_INIT_STATE
}

export const rootReducer = combineReducers<IAppState>({
  placeholder: placeholderReducer
});