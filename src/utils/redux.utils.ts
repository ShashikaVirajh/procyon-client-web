import { AnyAction } from 'redux';

import { Action, ActionWithPayload, Matchable } from 'types/redux.types';

/** createAction */
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): Action<T> | ActionWithPayload<T, P> {
  return { type, payload };
}

/** withMatcher */
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>;

export function withMatcher(actionCreator: Function): any {
  const type = actionCreator().type;

  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}
