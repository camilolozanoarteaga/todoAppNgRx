import { ActionReducerMap } from '@ngrx/store';

import * as fromUi from './shared/ui.reducer';

export interface AppState {
  ui: fromUi.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: fromUi.uiReducer
};
