import { Dispatch } from "redux";
import axios from "axios";
import { TodoAction, TodosActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
      );
      setTimeout(() => {
        dispatch({
          type: TodosActionTypes.FETCH_TODOS_SUCCES,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка при загрузке списка дел",
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return { type: TodosActionTypes.SET_TODO_PAGE, payload: page };
}
