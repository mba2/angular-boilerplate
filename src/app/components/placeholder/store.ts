/** PREVENTION TO OBJECT MUTATION */
import { tassign } from 'tassign'; 
/** ACTIONS */
import { CHANGE_TITLE, INCREMENT } from './actions';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

export interface IPlaceholderState {
  counter: number;
  title: string;
  items: any[];
}

export const PLACEHOLDER_INIT_STATE: IPlaceholderState = {
  counter: 0,
  title: 'Placeholder Title',
  items: []
}

export function placeholderReducer(state: IPlaceholderState = PLACEHOLDER_INIT_STATE, action ) : IPlaceholderState {
  switch(action.type) {
    case CHANGE_TITLE:
      return changeTitle(state,action); 
    case INCREMENT:
      return increment(state,action);
    }

    return state;
  }
  
  
function changeTitle(state,action) {

  return state;
}

function increment(state,action) {
  return tassign(state,
    {
      counter: state.counter + 1
    });
}