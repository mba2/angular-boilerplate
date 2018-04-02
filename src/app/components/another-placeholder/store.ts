import { IAppState } from "../../store";
import { tassign } from "tassign";

import { LOAD_ANOTHER_COMPONENT } from "./actions";

export interface IAnotherPlaceholder {
  otherTitle: string;
  otherCounter: number;
}

export class AnotherPlaceholderActions {
  constructor(
    private state: IAnotherPlaceholder,
    private action
  ){}

  loadAnotherComponent() {
    return tassign(
      this.state,
      {
        otherTitle : 'title loaded',
        otherCounter : this.action.payload + 10
      }
    );
  }
}

export function AnotherPlaceholderReducer(
  state:IAnotherPlaceholder = null, 
  action){
    const actions = new AnotherPlaceholderActions(state, action);
    switch(action.type) {
      case LOAD_ANOTHER_COMPONENT:
        return actions.loadAnotherComponent();
      default: 
        return state;
    }
}