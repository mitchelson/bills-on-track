declare module "*.jpg";
declare module "*.svg";
declare module "*.png";

declare module "react-redux" {
  import { ThunkDispatch } from "redux-thunk";

  export * from "react-redux";

  export type RootState = {
    user: typeof import("./store/reducers/user.reducer").initialState;
    accounts: typeof import("./store/reducers/accounts.reducer").initialState;
    transactions: typeof import("./store/reducers/transactions.reducer").initialState;
  };

  export function useDispatch<
    TDispatch = ThunkDispatch<RootState, any, AnyAction>,
  >(): TDispatch;

  export function useSelector<TState = RootState, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean,
  ): TSelected;

  export function useStore<TState = RootState>(): import("redux").Store<TState>;

  export function batch(fn: () => void): void;
}
