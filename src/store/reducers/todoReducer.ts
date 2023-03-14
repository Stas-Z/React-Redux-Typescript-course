import { TodoAction, TodosActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodosActionTypes.FETCH_TODOS_SUCCES:
      return { ...state, loading: false, todos: action.payload };
    case TodosActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodosActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
