import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

// Action type
export const CHANGE_INPUT = "todo/CHANGE_INPUT";
export const INSERT = "todo/INSERT";
export const TOGGLE = "todo/TOGGLE";
export const REMOVE = "todo/REMOVE";

// Action Functions
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Map({
  input: "",
  todos: List()
});

export default handleActions(
  {
    // default  >>> [ACTION_TYPE] : (state, action)
    // 아래코드는 비구조화를 통해 깔끔한 코드 작성
    [CHANGE_INPUT]: (state, { payload: value }) => state.set("input", value),
    [INSERT]: (state, { payload: text }) => {
      const item = Map({ id: id++, checked: false, text });
      return state.update("todos", todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
      // id 값을 가진 index 를 찾아서 checked 값을 반전시킵니다
      const index = state.get("todos").findIndex(item => item.get("id") === id);
      return state.updateIn(["todos", index, "checked"], checked => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
      // id 값을 가진 index 를 찾아서 지웁니다.
      const index = state.get("todos").findIndex(item => item.get("id") === id);
      return state.deleteIn(["todos", index]);
    }
  },
  initialState
);
