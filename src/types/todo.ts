export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodosActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCES = "FETCH_TODOS_SUCCES",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodoAction {
  type: TodosActionTypes.FETCH_TODOS;
}
interface FetchTodoSuccesAction {
  type: TodosActionTypes.FETCH_TODOS_SUCCES;
  payload: any[];
}
interface FetchTodoErrorAction {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodoPage {
  type: TodosActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccesAction
  | FetchTodoErrorAction
  | SetTodoPage;
